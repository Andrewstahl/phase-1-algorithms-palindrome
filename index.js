function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split('');

  let initialValue = '';
  const backwardsWord = splitWord.reduce(
    (previousValue, currentValue) => currentValue + previousValue, initialValue);

  return word === backwardsWord;
}

/* 
  Add your pseudocode here
  Grab the word and break it up into each character
  
  Re-combine the array backwards so that the original
  word is backwards

  if the word and the backwards word are the same,
    return true
  else
    return false

*/

/*
  Add written explanation of your solution here
  First, instead of iterating over the characters of the word, 
  I want to just break up the word into an array. I'll then
  recombine that array into a string again, but backwards so that
  the return value is the mirrored version of the original word.
  Finally, I want to compare the two and if they are equal, we'll 
  return true. Else, we'll return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
