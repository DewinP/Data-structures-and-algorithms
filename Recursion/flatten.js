/*
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all
values flattened.

Examples:

flatten([1,2,3,[4,5]]) -> [1,2,3,4,5]
flatten([[1],[2],[3]]) -> [1,2,3]
*/

function flatten(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened = flattened.concat(flatten(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}

console.log(flatten([1, 2, 3, [4, 5]]));
