// How would you check if a number is an integer?

function isInt(num){
    if (num % 1 === 0){
        return true
    } else if (num % 1 !== 0){
        return false
    }
}

console.log(isInt(2))
console.log(isInt(2.5))