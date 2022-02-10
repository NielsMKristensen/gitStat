const maps = require('../util/Mappings');
const map = maps.formCodes;

const getCode = (obj) => {
    let mappedRepos = {};
    
    for(key in obj){
        
        let repoName = key.substring(key.indexOf('_')+1,key.length);
        let repoConfig = key.substring(0,key.indexOf('_'));
        let code = map[repoConfig];
        
        if(mappedRepos[repoName] === undefined){
            mappedRepos[repoName] = code;
        }
        else{
            mappedRepos[repoName] += code;
        }
    }
    return mappedRepos;
}

module.exports = getCode;