//DAY-9:  WAF arraysAreEqual that takes two arrays arr1 and arr2 as input
//        and returns true if the arrays are equal (i.e. contains the same elements in the same order)
//        and false otherwise.

//        Solution:

const arraysAreEqual = (arrayOne, arrayTwo) => {
  if (arrayOne.length != arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }

  return true;
  //return arrayOne.every((value, index) => value === arrayTwo[index]);
};

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arraysAreEqual([1, 2, 3, 5], [1, 5, 3, 2]));
