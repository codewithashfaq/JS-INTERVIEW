//DAY-12:  WAF that takes a string as input and returns the count of vowels in that string.

//         Constraints:
//              The input string may contain letters in both uppercase and lowercase.
//              The output should be a non-negative integer representing the count of vowels in the input string

//        Solution:

const countVowels = (inputString) => {
  const vowels = "aeiou";

  //   return inputString
  //     .trim()
  //     .split("")
  //     .reduce((count, char) => (vowels.includes(char) ? count + 1 : count), 0);

  return inputString
    .trim()
    .split("")
    .reduce((acc, char) => {
      if (vowels.includes(char.toLowerCase())) {
        acc[char.toLowerCase()] = (acc[char.toLowerCase()] || 0) + 1;
      }

      return acc;
    }, {});
};

console.log(countVowels("HellOo world"));
console.log(countVowels("ThE quIck brOn fOx"));
