// Write a function that takes an array of numbers and a function as parameters.
// The function should return true if the input meets a certain condition
// or false otherwise. Your function should return true
// if the function parameter returns true for _any_ of the array elements in the array
// parameter or false otherwise.
//   Ex:
// Input: [1,2,3]  function(num){return num === 2}
// Output: true
//
// Input: [1,5,3]  function(num){return num === 2}
// Output: false
//
// Input: [1,2,3]  function(num){return num % 2 === 0}
// Output: true
//
// Input: [1,5,3]  function(num){return num % 2 === 0}
// Output: false

let arr = [1, 2, 3]
const doSomething = function(arr, callback){
    callback()
}

doSomething(arr, function(){
  for (let i =0; i<arr.length; i++){
    if (arr[i]%2 === 0){
      return true
    }
  }
  return false
})
