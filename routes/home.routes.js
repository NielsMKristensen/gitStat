const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');

//get login page. (should be start page. page home in our nice picture)
router.get('/home', /*isLoggedIn,*/ (req,res,next) => res.render('home.hbs'));

module.exports = router;