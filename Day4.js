//DAY-4:  WAF to sort an array of numbers in an ascending order.

//     	  Constraints:
//      		The function should take an array of numbers as input.
//      		It should return a new array with the numbers sorted in ascending order.
//      		The original array should remain unchanged.
//      		You are not allowed to use the built in sort() method.

//        Solution:

const sortAscending = (inputArray) => {
  const toSortArray = [...inputArray];
  const n = toSortArray.length;

  for (let pass = 0; pass < n - 1; pass++) {
    for (let i = 0; i < n - 1 - pass; i++) {
      if (toSortArray[i] > toSortArray[i + 1]) {
        let temp = toSortArray[i + 1];
        toSortArray[i + 1] = toSortArray[i];
        toSortArray[i] = temp;
      }
    }
  }

  return toSortArray;
};

console.log(sortAscending([5, 3, 10, 8, 100, 18, 15, 10]));
