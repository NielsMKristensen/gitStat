const { Router } = require("express");
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.models');

//get login page. (should be start page. page 1 in our nice picture)
router.get('/register',(req,res,next) => res.render('register.hbs'));

module.exports = router;