// ------------ ARITHMETIC OPERATORS -----------

// 1. Plus
// Complete the function named `add` that takes two parameters, adds the two together and returns the result.
// For example: add(2, 1) will return 3.
// For example: add(8, 2) will return 10.
// Hint: use the addition operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
function add(num1, num2) {
  return num1 + num2
}

// 2. Minus
// Complete the function named `minus` that takes two parameters, minuses the second parameter from the first and returns the result.
// For example: minus(2, 1) will return 1,
// For example: minus(8, 2) will return 6.
// Hint: use the subtraction operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction
function minus(snake, deltoraquest) {
  return snake - deltoraquest
}

let surething = minus(10, 99)

console.log(surething)

// 3. Multiply
// Complete the function named `multiply` that takes two parameters, muliplies the two parameters and returns the result.
// For example: multiply(3, 2) will return 6.
// For example: multiply(9, 2) will return 18.
// Hint: use the multiplication operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
function multiply(snake, deltoraquest) {
  return snake * deltoraquest
}

let freshmod = multiply(10, 99)

console.log(freshmod)

// 4. Divide
// Complete the function named `divide` that takes two parameters, divides the two parameters and returns the result.
// For example: divide(6, 2) will return 3.
// For example: divide(15, 3) will return 5.
// Hint: use the division operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
function divide(num1, num2) {
  return num1 / num2
}

// 5. Increment
// Complete the function named `increment` that takes a parameter, increases the value of the parameter and returns the result.
// For example: increment(22) will return 23.
// For example: increment(34) will return 35.
// Hint: use the increment operator, research the difference between num++ and ++num.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
function increment(num) {
  return ++num
}

// 6. Decrement
// Complete the function named `decrement` that takes a variable, decreases the value of the variable and returns the result.
// For example: decrement(6) will return 5.
// For example: decrement(15) will return 14.
// Hint: use the decrement operator, research the difference between num-- and --num.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
function decrement(num) {
  return --num
}

// ------------ LOGICAL OPERATORS -----------

// 7. AND
// Complete the function named `and` that takes two booleans as parameters.
// Return the first and second parameter.
// For example: and(true, true) will return true.
// For example: and(true, false) will return false.
// Hint: use the AND operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
function and(bool1, bool2) {
  return bool2 && bool1
}

let haircut = not(true, false)

console.log(haircut)

// 8. OR
// Complete the function named `or` that takes two booleans as parameters.
// If either of the two parameters are true, return true.
// If neither are true it should return false.
// For example: or(true, false) will return true.
// For example: or(false false) will return false.
// Hint: use the OR operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
function or(bool1, bool2) {
  return bool1 || bool2
}

// 9. NOT
// Complete the function named `not` that takes a boolean as a parameter.
// Return the opposite boolean to whatever is passed in.
// For example: not(false) will return true.
// For example: not(true) will return false.
// Hint: use the NOT operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
function not(bool) {
  return !bool
}

// ------------ COMPARISON OPERATORS -----------

// 10. Greater than
// Complete the function named `isGreaterThan` that takes two parameters and checks if the first parameter is greater than the second.
// For example: isGreaterThan(12, 10) should return true.
// For example: isGreaterThan(12, 24) should return false.
// Hint: use the greater than operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than
function isGreaterThan(num1, num2) {
  return num1 > num2
}

// 11. Less than
// Complete the function named `isLessThan` that takes two parameters and checks if the first parameter is less than the second.
// For example: isLessThan(63, 102) should return true.
// For example: isLessThan(63, 60) should return false.
// Hint: use the less than operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
function isLessThan(num1, num2) {
  return num1 < num2
}

// 12. Greater than or equal to
// Complete the function named `isGreaterOrEqual` that takes two parameters and checks if the first parameter is greater than or equal to the second.
// For example: isGreaterOrEqual(12, 12) should return true, isGreaterOrEqual(14, 12) should return true.
// For example: isGreaterOrEqual(12, 24) should return false.
// Hint: use the greater than or equal to	operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal
function isGreaterOrEqual(num1, num2) {
  return num1 >= num2
}

// 13. Less than or equal to
// Complete the function named `isLessOrEqual` that takes two parameters and checks if the first parameter is less than or equal to the second.
// For example: isLessOrEqual(10, 10) should return true, isLessOrEqual(8, 10) should return true.
// For example: isLessOrEqual(123, 24) should return false.
// Hint: use the less than or equal to operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal
function isLessOrEqual(num1, num2) {
  return num1 <= num2
}

// 14. Equal
// Complete the function named `isSimilar` that takes two parameters and checks the two values for equality.
// For example: isSimilar(10, '10') should return true.
// For example: isSimilar(10, '14') should return false.
// Hint: use the equal operator and note the difference between equal and strict equal.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
function isSimilar(num, stringNum) {
  return num == stringNum
}

// 15. Strict Equal (has equal value and same data type)
// Complete the function named `isSameTypeAndVal` that takes two parameters and checks the two values for strict equality.
// For example: isSameTypeAndVal('1', 1) should return false.
// For example: isSameTypeAndVal('password', 'passW0rd') should return false.
// Hint: use the strict equal	operator, please note the difference between this operator and the equal operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
function isSameTypeAndVal(stringOrNum1, stringOrNum2) {
  return stringOrNum1 === stringOrNum2
}

// 16. Not equal
// Complete the function named `isNotSimilar` that takes two parameters and checks the two values do not equal the same value.
// For example: isNotSimilar('1', 1) should return false.
// For example: isNotSimilar(1, '2') should return true.
// Hint: use not equal operator and note the difference between not equal and strict not equal.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality
function isNotSimilar(stringOrNum1, stringOrNum2) {
  return stringOrNum1 != stringOrNum2
}

// 17. Strict not equal
// Complete the function named `isNotSameTypeOrVal` that takes two parameters and checks the two values do NOT equal the same value or same data type.
// For example: isNotSameTypeOrVal(234, '123') should return true - because (it is true) they ARE NOT same value or same data type.
// For example: isNotSameTypeOrVal(123, 456) should return true - because (it is true) they ARE NOT same value.
// For example: isNotSameTypeOrVal(12, 12) should return false - because they ARE same data type AND the same value.
// Hint: use the strict not equal operator, please note the difference between this operator and the not equal operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality
function isNotSameTypeOrVal(one, two) {
  return one !== two
}

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
module.exports = {
  add,
  minus,
  multiply,
  divide,
  increment,
  decrement,
  and,
  or,
  not,
  isGreaterThan,
  isLessThan,
  isGreaterOrEqual,
  isLessOrEqual,
  isSimilar,
  isSameTypeAndVal,
  isNotSimilar,
  isNotSameTypeOrVal,
}
