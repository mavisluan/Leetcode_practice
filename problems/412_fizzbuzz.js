/** 412. Fizz Buzz Easy
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:
n = 15,
Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */

// Solution 1 naive Approach
// Time: O(N)
// Space: O(N) Since it's just the answer array to be returned, it won't be part of the algorithms complexity. And there is no intermediate space utilization. Hence O(1)
const fizzBuzz = function (n) {
  let num = 1;
  const res = [];
  while (num <= n) {
    if (num % 3 === 0 && num % 5 === 0) res.push('FizzBuzz');
    else if (num % 3 === 0) res.push('Fizz');
    else if (num % 5 === 0) res.push('Buzz');
    else res.push(`${num}`);
    num++;
  }
  return res;
};

// Solution 2 string concatenation
const fizzBuzzStringConcate = (n) => {
  const res = [];

  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) str += 'Fizz';
    if (i % 5 === 0) str += 'Buzz';
    if (str === '') str += i; // if str is empty --> not divided by 3 or 5
    res.push(str);
  }

  return res;
};
