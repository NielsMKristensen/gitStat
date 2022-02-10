const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const Git = require('../models/Git.models'); 
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');
const { rawListeners } = require("../models/User.models");
const getCode = require('../util/getCode');
const getRepos = require('../util/getLinkToRepos');
const getConfig = require('../util/getNameFromCode');

//get login page. (should be start page. page home in our nice picture)
router.get('/home', isLoggedIn, (req,res,next) => {
    //fetch configuration from datase
    // crate the API links    
    const gitusernames = req.session.currentUser.gitusernames;
    const userId = req.session.currentUser._id;

    gitData();
    async function gitData(){
        let data = await getGit();
        console.log(data)
        res.render('home.hbs',{data: data});
    }

    async function getGit(){
        let p = Git.findOne({username:userId})
            .then(user => {
                return user.gitDetails;
            });
            return p;
        }
});

//Get available configuration from the database
router.get('/profile', isLoggedIn, (req,res,next) => {
    const gitusernames = req.session.currentUser.gitusernames;
    const userId = req.session.currentUser._id;
    let availableConfig = {};
    let config = {};
    for (i in gitusernames){
    getRepos(gitusernames[i])
        .then( data => {
            Git.findOne({username: userId})
                .then((user) => {
                    // console.log('got the user ' + user);
                    availableConfig = user.config;
                    // console.log('got the config ' + JSON.stringify(availableConfig));
                    config = getConfig(availableConfig);
                    //add config to data
                    for(i in data){
                        for(j in config){
                            // parse text 
                            if(data[i].name == j){
                                let a = config[j].split('_');
                                for(x = 0; x<a.length;x++){
                                    a[x] += '_';
                                }
                                a.pop();
                                for(x = 0; x<a.length;x++){
                                    data[i][a[x]] = 'checked'; 
                                }
                                
                            }
                        }
                    }
            });
            res.render('profile', {data: data});
    });
   }
   
});

router.post('/home',isLoggedIn, (req,res,next) => {
    
    let obj = req.body;
    let userId = req.session.currentUser._id;
    getCode(obj);
    
    for(key in obj){
        // console.log(key + ': ' + key.obj);
        //here we need to update the db based on the key
        //first remove everything so that changes also handled and then add everything again
        //prepare config object
        // console.log(req.session.currentUser.gitusernames + ' ' + key + ' code ' );
        // console.log(key.indexOf('_'));
        

        Git.findOne({username: userId})
            .then(user => {
                if(user){
                    // delete
                }
                if(!user){
                    //create user
                    // Git.create({username:userId,})
                }
            })
    }
});

module.exports = router;