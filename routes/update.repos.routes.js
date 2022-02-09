const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const Git = require('../models/Git.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');
// const { route } = require("../app.js");
// const getFullPath = require('../util/getLinkFromCode');

const getRepos = require('../util/getLinkToRepos');
const getRepoWithCode = require('../util/getCode');

//Fetching all the repositories for the logged in user
router.post('/profile', isLoggedIn,(req,res,next) => {
    const gitusernames = req.session.currentUser.gitusernames;
    const userId = req.session.currentUser._id;
    let repoWithCode = getRepoWithCode(req.body);

    Git.findOne({username:userId})
        .then(user => {
            console.log('user: ' + user);
            user.config = repoWithCode;
            user.save();
        })
        .then(() =>  res.redirect('/home'))
        .catch(err => console.log('Error during update updating git configuration' + err));
});

module.exports = router;