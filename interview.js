//callback function explained//

//A callback function that is passed into another function as an argument//
//Why was a function sad after a successfull first call? It didn't get a callback.

var arr = [1, 2, 3]

function modifyArray(arr, callback){
  arr.push(4)
  callback();
}

modifyArray(arr, function(){
  console.log(`The arr is now modified to ${arr}`)
})

