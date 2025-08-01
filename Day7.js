//DAY-7:  WAF factorial that takes a non-negative integer number as input and returns its factorial.

//        Solution:

const factorial = (num, acc = 1) => {
  if (num < 0) return "Not a valid number";
  if (num === 0) return 1;

  let product = 1;
  for (let i = 1; i <= num; i++) {
    product = product * i;
  }
  return product;

  //return num * factorial(num - 1);    //recursive case
  //if (num === 0) return acc;
  //return factorial(num - 1, num * acc);   //tail recursive case
};

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(7));
console.log(factorial(-5));
