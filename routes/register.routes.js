const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');

//GET registration page. (not in our wirefraime description lets add)
router.get('/register', isLoggedOut, (req,res,next) => res.render('register.hbs'));

//POST registration with info from registration page.
router.post('/register', (req, res,next ) => {
    
  const { username, password, gitusernames } = req.body;
  
  console.log(username + ' ' +  password + ' ' +   gitusernames);
    
    if (!username || !password || !gitusernames) {
      res.render('register', {errorMessage: 'All fields needs to be filled out, please provide username, password and GIT username'})
      return
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
      res
        .status(500)
        .render('register', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
     return;
  }

  bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(hashedPassword => {
        //Create the new user
        return User.create({
            username,
            password: hashedPassword,
        });
      })
      
      .then(newUser => {
        //Fetch new user
        User.findById(newUser._id)
          //update user with git username
          .then(newUserToUpdate => {
            newUserToUpdate.gitusernames.push(gitusernames);
            newUserToUpdate
            .save()
          })
          
          .catch(err => console.log('Error while pushing git username ' + err));
      })
      .then(userFromDB => {
        res.redirect('/home');
    })
    .catch(error => {
        if (error.code === 11000) {
            res.status(500).render('register', {errorMessage: 'user already exists please choose another username'});
        } else { 
        next(error);
        }
    });
});



router.post('/unregister', (req,res,next) => {
   
  const user = req.session.currentUser;
  console.log('user', user._id)
   
  User.findByIdAndRemove(user._id)
      .then(() => res.redirect("login"))
      .catch((err) => next(err));
  });



module.exports = router;

