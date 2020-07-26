/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency.

Sample Input:

sameFrequency(181,281) -> True
sameFrequency(34,14) -> False
sameFrequency(3589578, 5879385) -> True
*/

function sameFrequency(number1, number2) {
  let num1 = String(number1);
  let num2 = String(number2);
  if (num1.length != num2.length) return false;
  let frequency = {};

  for (let i = 0; i < num1.length; i++) {
    let currNum = num1[i];
    frequency[currNum] ? (frequency[currNum] += 1) : (frequency[currNum] = 1);
  }

  for (let i = 0; i < num2.length; i++) {
    let currNum = num2[i];
    if (!frequency[currNum]) {
      return false;
    } else {
      frequency[currNum] -= 1;
    }
  }
  return true;
}
