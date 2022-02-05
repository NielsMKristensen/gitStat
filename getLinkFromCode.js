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

Fetch the path based on the config
 function getPath(x){
   const arrayOfCodes= decodeCode(x);
   const arrayOfPath = [];
   for(i in arrayOfCodes){
     //store and then get the link from somewhere
     arrayOfPath.push();
   }
 }
