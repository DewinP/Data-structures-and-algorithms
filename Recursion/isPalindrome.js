/*
Write a recursive function called isPalindrome which returns true if the string passed to it is palindrome(reads
    the same backward and forward). Otherwise returns false.
    
    examples:

    isPalindrome('awesome') -> false
    isPalindrome('car') -> false
    isPalindrome('tacocat') -> true
*/

function isPalindrome(str) {
  if (str.length === 1) return true;
  else if (str[0] === str[str.length - 1]) {
    return true && isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}

console.log(isPalindrome("tacocat"));
