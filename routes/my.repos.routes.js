const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');
// const { route } = require("../app.js");
// const getFullPath = require('../util/getLinkFromCode');

const getRepos = require('../util/getLinkToRepos');
// const maps = require('../util/Mappings');
// const map = maps.gitAPIPathUsers;
// const { default: axios } = require('axios');

//Fetching all the repositories for the logged in user
router.get('/myRepos', isLoggedIn,(req,res,next) => {
    const gitusernames = req.session.currentUser.gitusernames;

   for (i in gitusernames){
    
    getRepos(gitusernames[i])
        .then( data => {
            res.render('profile', {data: data});
    });
   }
});

/* router.post('/home', isLoggedIn, (req,res,next) => {
    console.log(req.session.currentUser.gitusernames);
}); */

module.exports = router;