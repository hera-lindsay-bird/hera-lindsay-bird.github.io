// ------------ FUNCTIONS -----------

// 1. Complete the `hello` function by returning the string 'Hello world!'.
// hint: do this inside the function body, i.e. inside of the curly brackets.
function hello() {
  return 'Hello world!'
}

function pinky(snow, rain) {
  return snow + rain
}

let pig = pinky(1, -9)

console.log(pig)

// 2. + 3. This is a combined question: Define two functions.
// The first function should be named `sayHi` and return the string 'Hello!'.

function sayHi() {
  return 'Hello!'
}

sayHi()

// The second function should be named `sayBye` and return the string 'Goodbye!'.

function sayBye() {
  return 'Goodbye!'
  console.log
}

// 4. Define a function named `greet` that returns the string 'Hey there!'.
// Then declare a variable named `salutation` and have it call the `greet` function.
// hint: call a function by writing the function name followed by parentheses, e.g. `hello()`   // expected output: 'Hello world!'

function greet() {
  return 'Hey there!'
}

let salutation = greet()

// 5. What value does the variable named `welcomeResult` have?
function welcome() {
  return 'Welcome!'
}

let welcomeResult = welcome()
welcomeResultIs = 'Welcome!'

// ---------- FUNCTIONS WITH PARAMETERS ---------

// 6. Define a function named `shout` which has a parameter and returns the parameter.
// i.e. the function will return whatever is passed into the parentheses.
// for example: Calling `shout('Echo')` would return the string 'Echo'.

function shout(Echo) {
  return Echo
}

// 7. After the following code has run, what value does `replyResult` have?
function reply(phrase) {
  return phrase
}

let replyResult = reply('Good morning')

replyResultIs = 'Good morning'

// 8. Define a function named 'helloFriend` to greet a person by name, using a parameter.
// For example: Calling helloFriend('Emily') should return the string 'Hello Emily!'.
// Hint: try using the `+` operator to join strings together.

function helloFriend(Emily) {
  return 'Hello ' + Emily + '!'
}

// 9. After the following code has run, what value does `goodMorningResult` have?
function goodMorning(name) {
  return 'Good morning ' + name + '!'
}

let goodMorningResult = goodMorning('Jacky')

const goodMorningResultIs = 'Good morning Jacky!'

// 10. After the following code has run, what value does `hiResult` have?
function hi(name) {
  return 'Hi ' + name + '!'
}

let hi1 = hi('Andy')
let hi2 = hi('Hamish')

let hiResult = hi1 + ' ' + hi2

const hiResultIs = 'Hi Andy! Hi Hamish!'

function warn(fire) {
  console.log(fire + ' ' + fire)
  return fire + ' ' + fire
}

// 11. Define a function named `warn` that takes a parameter (it will be a string).
// it should console.log() the parameter duplicated, with a space between each string
// then return that same value
// for example: calling warn('alarm') should console.log() the value 'alarm alarm', then return the value 'alarm alarm'.

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  hello,
  reply,
  goodMorning,
}
if (typeof sayHi !== 'undefined') toExport.sayHi = sayHi
if (typeof sayBye !== 'undefined') toExport.sayBye = sayBye
if (typeof greet !== 'undefined') toExport.greet = greet
if (typeof salutation !== 'undefined') toExport.salutation = salutation
if (typeof shout !== 'undefined') toExport.shout = shout
if (typeof helloFriend !== 'undefined') toExport.helloFriend = helloFriend
if (typeof welcomeResultIs !== 'undefined')
  toExport.welcomeResultIs = welcomeResultIs
if (typeof replyResultIs !== 'undefined') toExport.replyResultIs = replyResultIs
if (typeof goodMorningResultIs !== 'undefined')
  toExport.goodMorningResultIs = goodMorningResultIs
if (typeof hiResultIs !== 'undefined') toExport.hiResultIs = hiResultIs
if (typeof warn !== 'undefined') toExport.warn = warn
module.exports = toExport
