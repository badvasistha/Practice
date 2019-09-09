// Return an Average
//===========Method1===============
const stat1 = [1, 2, 3, 4, 4, 5, 5];
function average(){
  const sum = stat1.reduce(function(prev, curr){
    return (prev + curr);  
   })
  return sum/stat1.length
}
console.log(average(stat1))


//=========Method2===========================
// Array.prototype.average = function(){
//   const sum = this.reduce(function(prev, curr){
//     return prev + curr
//   })
//   return sum/this.length;
// }
// const avg = stat1.average();
// console.log(avg)

