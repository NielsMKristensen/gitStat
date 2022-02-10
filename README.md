# Project GIT Statistics

## GIT Stat project #2 Full-stack Web Application. 

An application to register and fetch information from own and other students git repositories in order to get inspiration and statistics.

## Main User tory

As a ironhacker student 
I want to be able to share with and follow my fellow ironhacker students' git repositories and statistics
So that I can compare code, get inspiration.

### user story

As a user of the Git Stat application
I want to be able to choose what i share with the other students.
To ensure the quality of my work.

#### Tasks
- fetch git repositories and repository information via GIT API
- add management of statistics to display
- save information for future use.
- push statistics and information to main page.

### user story
As a user of the Git Stat application
I want my personal information to be protected from non git stat users.
so that i can share with confidence.

#### tasks
- subscribe
- authentication
- login
- manage user (git username)
- unsubscribe

### other tasks
- Styling
- trouble shooting :-)
- deploy to hiroku
- mongo cloud setup.
# ADD MORE


## Wire frames
Insert pictures here

## Technologies
-	Node.js
-	Express.js
-	MongoDB
-	Mongoose
-	ES6
-	Heroku
-	Axios
-	GIT API
-	CSS
-	HTML
-	HBS
-	ironLauncher


## Models

## GIT information
const {Schema, model, SchemaTypes} = require('mongoose');

const gitSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    config: {
        type:Object
    },
    gitDetails: [{
        type:Object
    }],
});

const Git = model("Git", gitSchema);

module.exports = Git;

### User information
const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
  
    },
    password: String,
  gitusernames: [{
    type: String,
  }],
  
  },
  {
  
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

## Server routes

Server routes table(Method, Route or URL, Description as columns)





## Project Link
https://github.com/ujjtamas/gitStat

## Future Work



## Resources
the internet.


## Team GITStat
 - Tamás Ujj
 - Niels M. Kristensen










### Old stuff
#Notes to discuss
Add anything here so that we don!t forget and can discuss




Others can access your selected repos and stats.

Only work public repositories

## Modules
Security for user management (Log in, log out)
Manage/share content (profile)
API
Provide/Share content

## Features
Register in database
log in
add your git username
List all repos
and select which repo to add to app 
and select features/stats to display

## Database
User data
Git repo

 ## API
GET data from GIT API on the go

## MVP:
login
register git repos
select at least one features 
fetch via API
display at elast 1 features

## Features:
self guide boolean
Look up repositories
Statistics
Plugin to Slack
Business with Ironhack
Add option for handling private repositories
Link to Git pages if there is any

## Personas
Students
Ironhacker student learning full stack web development.



## Available statistics
Link to Git documentation: https://docs.github.com/en/rest/reference/metrics#get-the-weekly-commit-count

base url: https://api.github.com/
weekly commit activity
    /repos/{owner}/{repo}/stats/code_frequency
weekly commit count
    /repos/{owner}/{repo}/stats/participation
weekly commit count for each day
    /repos/{owner}/{repo}/stats/punch_card
Page views
    /repos/{owner}/{repo}/traffic/views
Repository clones
    /repos/{owner}/{repo}/traffic/clones
Referral paths
    /repos/{owner}/{repo}/traffic/clones
Referral sources
    /repos/{owner}/{repo}/traffic/popular/referrers

  https://api.github.com/repos/ujjtamas/gitStat/stats/code_frequency

  MONGODB_URI='mongodb://localhost:27017/gitstat'
  MONGODB_URI='mongodb+srv://dbUser:w9bDjB6MBfsJKZEM@cluster0.j2roq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'