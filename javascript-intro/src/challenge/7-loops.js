// ------------ LOOPS -----------

// 1. Here are two functions:
function printResult(fruitType) {
  console.log('fruit: ' + fruitType)
}

function printFruit(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
  }
}
// If the function 'printFruit' was called with the following array ['apple', 'orange', 'banana', 'pineapple']
// e.g. printFruit(['apple', 'orange', 'banana', 'pineapple'])
// How many times would the function 'printResult' be called?
// Uncomment the following line and assign your answer to the variable `numberPrintResultCalls`.

const numberPrintResultCalls = 4

// 2. Define a function named `logNames` that takes an array as a parameter.
// It should loop for the array's length and console.log each name in the array.
// For example: logNames(['Sally', 'Nikita', 'Arnav', 'Akira']) would console.log each person's name. 4 names in total.
// For example: logNames(['Arnav', 'Akira']) would console.log each person's name. 2 names in total.

function logNames(spiderman) {
  for (let i = 0; i < 4; i++) console.log(spiderman[i])
}

// 3. Define a function named 'printCountdown' that takes an array as a parameter.
// It should loop in reverse through the length of the array and console.log each item with an exclamation mark added to the end.
// For example: printCountdown(['blast off', 'one', 'two', 'three']) would console.log "three! two! one! blast off!".
// Hint #1: Remember that array indexes begin at 0. How would you use array.length to begin your for loop to access the last element in the array?
// Hint #2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement

function printCountdown(spiderman) {
  for (let i = 3; i >= 0; --i) console.log(spiderman[i] + '!')
}

// ------------ STRETCH CHALLENGES -----------
// The next two challenges can be a bit tricky, remember to ask for help if you need it.

// 4. Define a function named `countShortNames` that takes an array of strings and returns a count of all the strings with a length less than 5.
// For example: countShortNames(['Sally', 'John', 'James', 'Alice', 'Sue']) would return a count of 2 for 'John' and 'Sue', as their names are less than 5 characters in length.
// Instead of a for loop, try using a `for of` loop.
// Hint #1: for reference see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// 5. Define a function named `everySecondItem` that takes an array of items and returns a new array that only includes every second item.
// Instead of a for loop, try this using the `forEach` array method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// For example: everySecondItem([1, 'test', 'something', 23, 42, {greeting: 'hi'}]) would return ['test', 23, {greeting: 'hi'}].
// Hint #1: The remainder (%) operator might also be useful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
// Hint #2: Array.push() can help add things to a results array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in Bootcamp.

// Don't change any code below this comment!
const toExport = {}
if (typeof numberPrintResultCalls !== 'undefined')
  toExport.numberPrintResultCalls = numberPrintResultCalls
if (typeof logNames !== 'undefined') toExport.logNames = logNames
if (typeof countShortNames !== 'undefined')
  toExport.countShortNames = countShortNames
if (typeof everySecondItem !== 'undefined')
  toExport.everySecondItem = everySecondItem
if (typeof printCountdown !== 'undefined')
  toExport.printCountdown = printCountdown
module.exports = toExport
