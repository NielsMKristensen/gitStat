const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const Git = require('../models/Git.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');
// const { route } = require("../app.js");
const getFullPath = require('../util/getLinkFromCode');

const getRepos = require('../util/getLinkToRepos');
const getRepoWithCode = require('../util/getCode');
// const getNameFromConfig = require('../util/getNameFromConfig');

//Fetching all the repositories for the logged in user
router.post('/profile', isLoggedIn,(req,res,next) => {
    const gitusernames = req.session.currentUser.gitusernames;
    const userId = req.session.currentUser._id;
    
    let gitDetailsArray = [];

    let repoWithCode = getRepoWithCode(req.body);
    
    renderPage();
    
    async function renderPage(){
        const r = await updateGit();
        res.render('home');
    }

    async function updateGit(){
        const arr = await getReposFunction();
        
        Git.findOne({username:userId, a: arr})
            .then(user => {
                user.config = repoWithCode;
                user.gitDetails = arr;
                user.save();
                return user;
            });
        }

        async function getReposFunction(){
        let p = await getRepos(gitusernames).then (data => {
            for(i in data){
                for(j in repoWithCode){
                    if(data[i].name == j){
                        let gitDetailsObj = {};
                        gitDetailsObj.title = j;
                        gitDetailsObj.gitusername = gitusernames[0];
                        gitDetailsObj.description = data[i].description
                        gitDetailsObj.linkToRepo = data[i].html_url;
                        gitDetailsObj.linkToStats = [...getFullPath(repoWithCode[j],gitusernames,data[i].name)];
                        gitDetailsArray.push(gitDetailsObj);
                    }
                }
            }
            return(gitDetailsArray);
            });
            return p;
        }
    // res.render('/home');
})

module.exports = router;