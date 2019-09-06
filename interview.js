var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];



const filteredData = data.filter(function(el){
  if(el.name != undefined && el.age != undefined){
    return true;
  }
  else {
    return false};
})

console.log(filteredData)


