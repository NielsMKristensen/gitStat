const { default: axios } = require('axios');
const maps = require('../util/Mappings');
const map = maps.gitAPIPathUsers;
let arr = [];


const getLinkToRepos = (username) => {
    let path = map + '/' + username + '/repos';

    let a;

    //fetching everything for the repos
axios.get(path)
  .then((response) => { 
    resolve (response.data);
    // console.log(a);
    // return {data: response.data}
  })
  .catch( (err) => console.log(err));
  
}

module.exports = getLinkToRepos;