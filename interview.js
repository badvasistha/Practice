//Palindrome
let sampleStr = "racecar";

//======== Method 1 ============//

const isPalindrom = function() {
  let newStr = sampleStr
    .split("")
    .reverse()
    .join("");

  if (newStr === sampleStr) {
    return true;
  } else {
    return false;
  }
};
//=================================//

//=============== Method 2 ========//

// function isPalindrom() {
//   for (let i = 0; i < sampleStr.length; i++) {
//     if (sampleStr[i] !== sampleStr[sampleStr.length - (i + 1)]) {
//       return false;
//     } else return true;
//   }
// }
//==================================//

//=============== Method 3 ========//

// function isPalindrom(){
//   const sampleArr = sampleStr.split('')
//   console.log(sampleArr)
//   for (let i = 0; i< sampleArr.length; i++){
//     if (sampleArr[i] !== sampleArr[sampleArr.length - (i + 1)]){
//      return false;
//     }
//     else {
//       return true;
//     }
//   }
// }
console.log(isPalindrom(sampleStr));
