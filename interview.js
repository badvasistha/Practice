// What will the following code output?

(function() {
    var a = b = 5;
  })();
  
  console.log(b); //5

// The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because
//var a = b = 5; is interpreted the following way:
    // var a = b;
    // b = 5;
//But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.