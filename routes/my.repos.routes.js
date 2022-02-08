const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');
// const { route } = require("../app.js");
// const getFullPath = require('../util/getLinkFromCode');
const getRepos = require('../util/getLinkToRepos');

router.get('/myRepos', (req,res,next) => {
    // console.log(req.session.currentUser);
    const gitusernames = req.session.currentUser.gitusernames;
    let arr = [];
    let repos = [];
    // console.log(gitusernames);
    // req.session.currentUser
    // User.findById()
   for (i in gitusernames){
    let b = getRepos(gitusernames[i]);
    console.log(b);
    
    
       /*  .then( data => {
            console.log('hej');
            repos.push(...data);
            // console.log(repos);
        
        }); */
    
    
   }

});

module.exports = router;