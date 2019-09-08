// Integer reversal 

let num = -1230;
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
console.log(reversedNum(num)) // -321


