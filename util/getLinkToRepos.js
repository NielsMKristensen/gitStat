const { default: axios } = require('axios');
const maps = require('../util/Mappings');
const map = maps.gitAPIPathUsers;
let arr = [];

const getLinkToRepos = (username) => {
    let path = map + '/' + username + '/repos';

    //fetching everything for the repos
    var p = axios.get(path)
        .then((response) => { 
        return(response.data);
        })
        .catch( (err) => console.log(err));

    return p;
}

module.exports = getLinkToRepos;