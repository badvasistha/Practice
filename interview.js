// Write a function that takes 2 parameters - the first is an array, the second is an element that may or may not be in the array.
// Without using any built in array methods, return true if the element is in the array or false otherwise.
// Ex:
// Input: [1,2,3]  1
// Output: true

// Input: [1,2,3]  4
// Output: false

// Input: ['code', 'dev', 'nerd']  'nerd'
// Output: true

// Input:   'genius'
// Output: false

let arr = ["code", "dev", "nerd"];
let ele = "dev";

const includes = function(arg1, arg2) {
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] === arg2) {
      return true;
    }
  }
  return false;
};

console.log(includes(arr, ele));
