// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db/db");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');


// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();

// 1. require the body-parser
const bodyParser = require('body-parser');
// 2. let know your app you will be using it
app.use(bodyParser.urlencoded({ extended: true }));

// 👇 Start handling routes here

//login route
const login = require("./routes/login.routes");
app.use("/", login);

//register route
const register = require("./routes/register.routes");
app.use("/", register);

//Main route
const home = require("./routes/home.routes");
app.use("/", home);

module.exports = app;
