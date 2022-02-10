# Project GIT Statistics

GIT Stat project #2 Full-stack Web Application. 

An application to share and access ironhack student's git repositories.

## Main User tory

As a ironhacker student 
I want to be able to share with and follow my fellow ironhacker students' git repositories and statistics
So that I can compare code, get inspiration.

### smaller user stories

As a user of the Git Stat application
I want to be able to choose what i share with the other students.
To ensure the quality of my work.


As a user of the Git Stat application
I want my personal information to be protected from non git stat users.
To prevent information theft.











Wireframes
User Stories
Setup(Optional)
Technologies Used
Models
Server routes table(Method, Route or URL, Description as columns)
Demo(Optional) (Screenshots or GIFs of the application)
Project Link
Future Work
Resources


Team GITStat







### Old stuff
#Notes to discuss
Add anything here so that we don!t forget and can discuss

# gitStat
Register and fetch statistics about student Git repositories

## Features
Register in database
log in
add your git username
List all repos
and select which repo to add to app 
and select features/stats to display

Others can access your selected repos and stats.

Only work public repositories

## Technologies

•	Node.js
•	Express.js
•	MongoDB
•	Mongoose
•	ES6
•	Heroku
•	Axios
•	GIT API
•	CSS
•	HTML
•	HBS
•	ironLauncher



## Modules
Security for user management (Log in, log out)
Manage/share content (profile)
API
Provide/Share content

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