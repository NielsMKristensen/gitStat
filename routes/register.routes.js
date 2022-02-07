const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');

//GET registration page. (not in our wirefraime description lets add)
router.get('/register', /*isLoggedOut*/ (req,res,next) => res.render('register.hbs'));

//POST registration with info from registration page.
router.post('/register', (req, res,next ) => {
    
    const { username, password, gitusernames } = req.body;

    if (!username || !password || !gitusernames) {
      res.render('/register', {errorMessage: 'All fields needs to be filled out, please provide username, password and GIT username'})  
    }
    bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(hashedPassword => {
        return User.create({
            username,
            password: hashedPassword,
            gitusernames
        });
      })
      .then(userFromDB => {
        res.redirect('/home');
    })
    .catch(error => {
      next(error);
    })
});


module.exports = router;