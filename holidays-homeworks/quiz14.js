/*
14. Write a function that takes a sentence as a parameter and returns the longest word of the sentence.
Example ===> "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam" = azaraaaam
*/

function findLargestWord(sentence) {
  sentence += " ";
  let word = "";
  let bigWord = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word += sentence[i];
    } else if (bigWord.length < word.length) {
      bigWord = word;
      word = "";
    } else {
      word = "";
    }
  }
  return bigWord;
}

const result = findLargestWord(
  "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam"
);

console.log(result);
