//How would you add your own method to the Array object so the following code would work?
// var arr = [1, 2, 3, 4, 5];
// var avg = arr.average();
// console.log(avg);

Array.prototype.average = function() {
    // calculate sum
    var sum = this.reduce(function(prev, cur) { return prev + cur; });
    // return sum divided by number of elements
    return sum / this.length;
  }
  
  var arr = [1, 2, 3, 4, 5];
  var avg = arr.average();
  console.log(avg); // => 3