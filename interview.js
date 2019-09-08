//Given a string of words or phrases, count the number of vowels.

let str = "hello";

function countVowels() {
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      count = arr[i].length;
      count++;
      console.log(count);
    }
  }
}

countVowels(str);
