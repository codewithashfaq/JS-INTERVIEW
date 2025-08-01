//DAY-6:  WAF findMax that takes an array of numbers as input and
//        returns the maximum number in the array

//        Solution:

const findMax = (numbers) => {
  if (numbers.length === 0) return null;

  //   let max = numbers[0];
  //   for (let i = 1; i < numbers.length; i++) {
  //     max = max > numbers[i] ? max : numbers[i];
  //   }
  //   return max;

  return Math.max(...numbers);
};

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));
