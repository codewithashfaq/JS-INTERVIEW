//DAY-8:  WAF calculateAverage that takes an array of numbers as input and
//        returns the average of those numbers.

//        Solution:

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

// const calculateAverage = (numbers) =>
//   numbers.length ? numbers.reduce((acc, num) => acc + num, 0) / numbers.length : 0;

console.log(calculateAverage([5, 10, 2, 8]));
console.log(calculateAverage([]));
