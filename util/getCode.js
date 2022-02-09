const maps = require('../util/Mappings');
const map = maps.formCodes;

const getCode = (obj) => {
    console.log(map);
    for(key in obj){
        console.log(key);
        console.log('   '+ key.indexOf('_'));
        
    }
}



/* commitStat
pageViews
clonesReferrals */

module.exports = getCode;