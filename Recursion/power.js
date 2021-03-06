/*
Write a function called power which accepts a base and an exponent. The function should return the power to
the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases
and exponents.

examples:

power(2,0) -> 1
power(2,,2) -> 4
power(2,4) -> 16

*/

function power(base, exp) {
  if (exp === 0) return 1;
  else {
    return base * power(base, exp - 1);
  }
}
