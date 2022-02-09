const { constants } = require('buffer');
const maps = require('../util/Mappings');
const map = maps.codePathMap;
const baseURL = maps.gitAPIPathRepos;
const formCodes = maps.formCodes;

const getName = (config) => {
    
    //iterate config from db
    for(i in config){
        let key = i;
        let codeArr = decodeCode(config[i]);
        let str = '';
        //iterate on config map
        for(j in formCodes){
            //itarate on decoded config
            for(x = 0;x < codeArr.length;x++){
                if(codeArr[x] == formCodes[j]){
                    str += j + '_';
                }
            }
        }
        // store config in text format
        config[key] = str;
    }
    return config;
}

function decodeCode(x,arr){
    let number = 0;
    let arr2 = arguments[1] == undefined ? [] : [...arr];
    
    if(x===0) {
      return arr;
    }
    
    for(i=0;;i++){
      if(x >= Math.pow(2,i)) continue;
      number = Math.pow(2,i-1);
      arr2.push(number);
      break;
    }
    x-=number;
    return decodeCode(x,arr2);
    }

module.exports = getName;