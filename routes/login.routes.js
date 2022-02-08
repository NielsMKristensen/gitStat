const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');


//get login page. (should be start page. page 1 in our nice picture)
router.get('/',(req,res,next) => res.render('login.hbs'));

router.post('/', (req, res, next) => {
    const { username, password } = req.body;
    
    User.findOne({username})
     .then(user => {
         if (!user) { 
            res.redirect('/', { errorMessage: 'User Name is not registered. Try with other user Name.' })
             return;
         }else if (bcryptjs.compare(password, user.password)) {
            console.log(user)
            req.session.currentUser = user
            console.log(user)
            res.redirect('/home')
         }else {
             res.render('/', { errorMessage: 'Incorrect password.' });
         }
     })
     .catch(error => next(error));
 })


module.exports = router;