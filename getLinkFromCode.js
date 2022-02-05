//Decode the code to know what config has been requested
function decodeCode(x,arr){
let number = 0;
if(x===0) return arr;

for(i=0;;i++){
  if(x > Math.pow(2,i)) continue;
  number = Math.pow(2,i-1);
  arr.push(number);
  break;
}
x-=number;
decodeCode(x,arr);
}

//Fetch the path based on the config
function getPath(x){
  const arrayOfCodes= decodeCode(x);
  const arrayOfPath = [];
  for(i in arrayOfCodes){
    //store and then get the link from somewhere
    arrayOfPath.push();
  }
}
