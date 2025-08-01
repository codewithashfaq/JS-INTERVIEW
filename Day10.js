//DAY-10:  WAF sumOfDigits that takes a number as input and
//        returns the sum of its digits

//        Constraints:
//          The input number will always be a positive number.
//          The input number can have multiple digits
//          The output should be the sum of all the digits in the input number.

//        Solution:

const sumOfDigits = (num) => {
  //num = Array.from(String(num), Number);
  //return num.reduce((acc, digit) => acc + digit, 0);

  //   num = num.toString();
  //   return num.split("").reduce((acc, digit) => acc + Number(digit), 0);

  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(sumOfDigits(1234));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
