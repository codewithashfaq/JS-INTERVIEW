//DAY-2:  You are required to implement a function generateHashTag that generates a hash tag from a
//        given input string. The has tag should be constructed as follows.

//        Constraints:
//              The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//              If the length of input string is greater than 280 characters or the input string is empty or contains only whitespaces, the function should return false.
//              Otherwise, the function should return the generated hash tag prefixed with #

//        Solution:

const generateHashTag = (inputString) => {
  if (inputString.trim().length === 0 || inputString.length > 280) return false;

  const hashTag = inputString
    .trim()
    .replace(/[^a-zA-Z\s]/g, "")
    .split(/\s+/)
    // .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .reduce((accumulator, word) => accumulator + word, "#");

  //console.log(hashTag);

  return hashTag;
};

console.log(generateHashTag(`my name is ashfaq // ??? {2} ,,> 8+8khan`));
