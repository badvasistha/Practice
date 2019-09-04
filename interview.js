//Write a function that would allow you to do this.
//multiply(5)(6);

function multiply(num1){
    return function(num2){
        return (num1)*(num2)
    }
}
console.log(multiply(5)(6))