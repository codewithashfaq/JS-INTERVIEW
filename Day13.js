// const reverseWords = (str) => {
//   words = str
//     .trim()
//     .replace(/[^\w\s]|_/g, "")
//     .split(/\s+/);

//   output = "";
//   for (let i = words.length - 1; i >= 0; i--) {
//     output += words[i];
//     if (i !== 0) output += " ";
//   }

//   console.log(str);

//   //   return output
//   //     .toLowerCase()
//   //     .split(" ")
//   //     .map((currentWord) => currentWord[0].toUpperCase() + currentWord.slice(1))
//   //     .join(" ");

//   return output
//     .toLowerCase()
//     .split(" ")
//     .map((currentWord) => currentWord[0] + currentWord.slice(1).toUpperCase())
//     .join(" ");
// };

// console.log(reverseWords("HELlo    woRld     , My friends"));
