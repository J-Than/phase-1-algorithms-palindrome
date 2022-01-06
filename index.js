function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = '';
  for (letter in word) {
    reverseWord = word[letter] + reverseWord;
  }
  return word === reverseWord;
}

/* 
  Add your pseudocode here
  Set a variable for the reversed word
  Append the letters of the original word to the reversed word in reverse order
  Compare the reversed word with the original word
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log('Expecting: true');
  console.log('=>', isPalindrome('amanaplanacanalpanamasidesreversedisamanaplanacanalpanama'));

  console.log("");

  console.log('Expecting: true"';
  console.log('=>', isPalindrome(""));
}

module.exports = isPalindrome;
