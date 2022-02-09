const { constants } = require('buffer');
const maps = require('../util/Mappings');
const map = maps.codePathMap;
const baseURL = maps.gitAPIPathRepos;

//Decode the code to know what config has been requested
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

// Fetch the path based on the config
 function getPath(x){
   const arrayOfCodes= decodeCode(x);
   let arrayOfPath = [];

   for(i in arrayOfCodes){
    let j = arrayOfCodes[i];
    arrayOfPath.push(...map[j]);
   }
  return arrayOfPath;
  }

  //construct the full link username REPOname needed
function getFullPath(x,gitUserName){
  let pathArray = getPath(x);
  let fullPathArray = [];
  if(pathArray.length ==0) return 'No path to return';

  for(i in pathArray){
    fullPathArray.push(baseURL + pathArray[i]);
  }

  console.log(fullPathArray);
}

module.exports = getFullPath();