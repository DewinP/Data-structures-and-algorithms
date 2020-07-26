/* 
Given an array of integers and a number, write a function called maxSubarraySum, which finds the max sum of a subarray
with the length of the number passed to the function.

Note that a subarray much consist of consecutive elements from the original array.

Sample Input:

maxSubarraySum([100,200,300,400], 2) -> 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) -> 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) -> 5
*/

function maxSubarraySum(array, subArrLen) {
  if (array.length < subArrLen) return null;

  let max = 0;
  let tempSum = 0;

  for (let i = 0; i < subArrLen; i++) {
    max += array[i];
  }

  tempSum = max;

  for (let i = subArrLen; i < array.length; i++) {
    tempSum += array[i] - array[i - subArrLen];
    max = Math.max(max, tempSum);
  }

  return max;
}
