//DAY-11:  WAF that takes an array of integers as input and removes any duplicate elements,
//         returning a new array with only the unique elements.

//        Solution:

const removeDuplicates = (inputArray) => {
  //   return [...new Set(inputArray)];

  //   return inputArray.filter((num, index) => inputArray.indexOf(num) === index);

  //   return inputArray.reduce(
  //     (acc, num) => (acc.includes(num) ? acc : [...acc, num]),
  //     []
  //   );

  const sorted = [...inputArray].sort((a, b) => a - b);
  return sorted.filter((num, index) => num !== sorted[index - 1]);
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicates([]));
