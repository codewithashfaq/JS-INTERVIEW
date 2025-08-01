//DAY-1:  WAF findLongestWord that takes a string as input and returns the longest word in the string.
//        If there are multiple longest words, return the first one encountered.

//	Constraints:
//	  The input string may contain alphabetic characters, digits, spaces, and punctuations.
//	  The input string is non-empty.
//	  The input string may contain multiple words separated by spaces.

//  Note:
//	  If the input string is empty or contain only whitespace, the function returns false.
//	  Function ignores leading & trailing whitespace when determining the longest word

//Solution:

const findLongestWord = (inputString) => {
  if (inputString.trim().length === 0) return false;

  const longestWord = inputString
    .trim()
    .replace(/[^\w\s\u2010\u2011-]/g, "")
    .split(/\s+/);
  //return longestWord.sort((a, b) => a.length - b.length).at(-1);

  console.dir(longestWord, { breakLength: 1, maxArrayLength: null });

  // return longestWord.reduce(
  //   (accumulator, currentWord) =>
  //     currentWord.length >= accumulator.length ? currentWord : accumulator,
  //   ""
  // );

  const n = longestWord.length;

  for (let pass = 0; pass < n - 1; pass++) {
    for (let i = 0; i < n - 1 - pass; i++) {
      if (longestWord[i].length > longestWord[i + 1].length) {
        const temp = longestWord[i + 1];
        longestWord[i + 1] = longestWord[i];
        longestWord[i] = temp;
      }
    }
  }

  return longestWord.at(-1);
};

// console.log(
// findLongestWord(
//   "The    quick‑brown  fox, surprisingly, leaped over   lazy‑dogs near the neighborhood!"
//  )
// );

console.dir(
  findLongestWord(
    "The    quick‑brown  fox, surprisingly, leaped over   lazy‑dogs near the neighborhood!"
  ),
  { breakLength: 1, maxArrayLength: null }
);
