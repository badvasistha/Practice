// Reverse Words

var phrase = 'I love Javascript';
function reversePhrase(){
  var reverseP = phrase.split('').reverse().join('');
  console.log(reverseP)
}

reversePhrase(phrase)