const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');
const { isLoggedIn, isLoggedOut } = require('../middlewares/middleware');


//get login page. (should be start page. page 1 in our nice picture)
router.get('/',(req,res,next) => res.render('login.hbs'));

module.exports = router;