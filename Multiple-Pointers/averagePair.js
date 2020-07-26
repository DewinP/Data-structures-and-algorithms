/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair
of values in the array where the average of the pair equals the target average. There may be more than one pair that matches
the average target

Sample Input:

avergaPair([1,2,3],2.5) -> true
averagePair([1,3,3,5,6,7,10,12,19],8) -> true
avergaPair([-1,03,4,5,6],4.1) -> false
*/

function averagePair(arr, targetAverage) {
  let start = 0;
  let end = arr.length - 1;

  while (start != end) {
    let currAvg = (arr[start] + arr[end]) / 2;
    if (currAvg === targetAverage) {
      return true;
    } else {
      currAvg < targetAverage ? start++ : end--;
    }
  }
  return false;
}
