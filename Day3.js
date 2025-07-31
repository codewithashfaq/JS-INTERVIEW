//DAY-3:  WAF called countChar that takes two parameters: a string and a character to count. The
//        function should return the number of times the specified character appears in the string.

//        Constraints:
//          The function should be able to count any lowercase or uppercase character, but the comparison must be case-sensitive.
//          The character parameter can be any printable ASCII character (the function should
//          accept any character that is part of the ASCII character set and is printable).

//        Solution:

const countChar = (inputString, inputChar) => {
  //let count = 0;
  //   inputString.split("").forEach((char) => {
  //     if (char === inputChar) {
  //       count++;
  //     }
  //   });

  const count = inputString
    .split("")
    .reduce((count, char) => (char === inputChar ? ++count : count), 0);

  //   console.log(count);
  return count;
};

console.log(countChar("MissIssippi", "I"));
