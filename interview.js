//Anagrams are words or phrases that contain the same number of characters.
let str1 = 'hello world',
    str2 = 'world hello';
const anagram = function(){
  if (str1.length === str2.length){
    console.log('is anagram')
  }
  else {
    console.log('not an anagram')
  }
}
anagram(str1, str2);


