/*
 Write a function called someRecursive which accepts an array and a callback. The function returns true if a single value in the
 array returns true when passed to the callback. Otherwise return false.

 example:
 const isOdd = val => val%2 !== 0

 someRecursive([1,2,3,4], isOdd) -> true
 someRecursive([2,6,8], isOdd) -> false
 */
const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  else if (callback(array[0])) return true;
  else {
    return someRecursive(array.slice(1), callback);
  }
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
