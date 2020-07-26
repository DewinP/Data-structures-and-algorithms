/*
Write a function called isSubsequence which takes two strings and checks wheher the characters in the first string form a subsequence
of the characters in the second string. in other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.


Sample Input:

isSubsequence('hello', 'hello world') -> true
isSubsequence('sing', 'sting') -> true
isSubsequence('abc', 'acb') -> false, order matters
*/

function isSubsequence(targetStr, sourceStr) {
  let i = 0;
  let j = 0;
  if (!targetStr) return false;
  while (j < sourceStr.length) {
    if (targetStr[i] === targetStr[j]) i++;
    if (i === targetStr.length) return true;
    j++;
  }
}
