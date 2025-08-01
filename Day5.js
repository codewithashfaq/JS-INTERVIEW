//DAY-5:  WAF to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number
//        or other sequence of characters that reads the same forward and backward,
//        ignoring spaces, punctuation, and capitalization.
//
//        Constraints:
//          The input string may contain letters, digits, spaces, punctuation, and special characters
//          The function should be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
//          Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
//          The function should return true if the input string is a palindrome and false otherwise.

const isPalindrome = (inputString) => {
  inputString = inputString
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  //   console.log(inputString);

  const reversedString = inputString.split("").reverse().join("");
  //   console.log(reversedString);

  return inputString === reversedString;
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
