//Array Chunking
let arr = [1, 2, 3, 4];

function chunk(arr, len){
  let chunks = []
  for (i = 0; i < arr.length; i++){
    chunks.push(arr.slice(i, arr.length))
    console.log(chunks)
  }
}
chunk(arr)