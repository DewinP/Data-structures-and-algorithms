/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name
formed by rearranging the letter of another, such as cinema, formed from iceman

Examples:

validAnagram('', '') -> False
validAnagram('aaz', 'zaa') -> False
validAnagram('anagram', 'nagaram') -> True
validAnagram('rat', 'car') -> False
validAnagram('qwerty', 'qeywrt') -> True

*/

function validAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let frequency = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if the letter exist, increment by 1, otherwise set it to 1
    frequency[letter] ? (frequency[letter] += 1) : (frequency[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //if letter doenst exist is not an anagram otherwise decrement by 1
    if (!frequency[letter]) {
      return false;
    } else {
      frequency[letter] -= 1;
    }
  }
  return true;
}
