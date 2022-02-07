const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');

//get registration page. (not in our wirefraime description lets add)
router.get('/register', /*isLoggedOut*/ (req,res,next) => res.render('register.hbs'));

module.exports = router;