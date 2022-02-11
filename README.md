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
- trouble shooting
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

### GIT model information
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
    
    gitDetails Object
    {
        title: <Name of repository>,
        gitusername: <Git username>,
        description: <Description from Git>,
        linkToRepo: <link to Git repository>
        linkToStats: <Array of links to Git repositories>
    }

    config Object
    {
        'name of repository': number
    }

const Git = model("Git", gitSchema);

module.exports = Git;

### User model information
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

| Method | Route | Description |
|:-------------:|:---------------:|:-----------:|
| / | GET | renders the homepage. |
| /logon | GET | renders the login page. |
| /logon | POST | logs the user in. and redirects to homepage. |
| /logout | POST | logs the user out. |
| /register | GET | renders the registration page. |
| /register | POST | save the username encrypted password and git username in the database. |
| /unregister | POST | deletes all user data and redirects to login page. |
| /changegitusername | POST | changes the git username based on input. |
| /statistics/:gitusername/:gitrepo | GET | fetches GIT information and render it on statistics page |
| /profile | GET | renders the profile page + add data for management . |
| /profile | POST | saves the data which is managed in the database |
| /home | GET | renders the home page. |

## Project Link
https://github.com/ujjtamas/gitStat

## Future Work
Display repositories from others who configured repositories
Add more graphs
Handle multiple usernames for the same user
During registration add another password field to match typos
Add password change field

## Resources
GraphJS
Git Documentation
Bootstrap
[Link to Git documentation](https://docs.github.com/en/rest/reference/metrics#get-the-weekly-commit-count)

## Team GITStat
 - Tamás Ujj
 - Niels M. Kristensen

## Available statistics
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