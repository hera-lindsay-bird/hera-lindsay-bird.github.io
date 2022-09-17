// ------------ CONDITIONALS -----------

// 1. if statement
// Write a function named `isMatch` that uses an `if statement` to check two values for "strict equality".
// Hint: Look up the term "js strict equality" if you are not sure.
// If the two values match, the function should return the string 'Match'.
// For example: When isMatch(7, 7) is called it should return the string 'Match'.

if (1 + 2 == 2) {
  console.log('good math')
} else {
  console.log('bad math')
}

function isMatch(a, b) {
  if (a === b) return 'Match'
}

pony = 'friends'

switch (pony) {
  case 'Dog':
    console.log('Dogs are lovely animals.')
    break
  case 'Cats':
    console.log('Ugolino is the best cat')
  case 'Marigold':
    console.log('Marigold is my very own pony.')
    break
  default:
    console.log('Sorry we are out of ${pony}.')
}

// 2. if, else statement
// Write a function named `isAMatch` that uses an `if else statement` to check two values for strict equality.
// If the two values match, the function should return the string 'Match'.
// If they are not a match, the function should return the string 'Not a Match'.
// For example: When isAMatch(21, 21) is called it should return the string 'Match', and isAMatch(7, 11) should return the string 'Not a Match'.

function isAMatch(snake, toad) {
  if (snake === toad) return 'Match'
  else {
    return 'Not a Match'
  }
}

// 3. if, else if, else statement
// Write a function named `greetings` that takes a string.
// If the string strictly equals 'Te Reo' the function should return the string 'Kia ora'.
// If the string strictly equals 'English' the function should return the string 'Hello'.
// Otherwise return a '👋'
// Hint: use an `if, else if, else statement`. Look up "js if, else if, else statement" if you are not sure.
// For example: greetings('Te Reo') should return 'Kia ora' and greetings('Dutch') should return '👋'.

function greetings(snowcone) {
  if (snowcone === 'Te Reo') {
    return 'Kia ora'
  } else if (snowcone === 'English') {
    return 'Hello'
  } else {
    return '👋'
  }
}

// 4. switch statement
// Write a function named `chooseGreetingLanguage` that takes a string.
// The function should use a `switch statement` to check if the string matches a particular case.
// If the string matches a case it should return the matching greeting value, otherwise return the default value.
// Use a switch statement (do not use `if / else` etc.) <go to='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch'>MDN switch statement</go>

// For example:
// chooseGreetingLanguage('Te Reo') returns 'Kia ora'
// chooseGreetingLanguage('English') returns 'Hello'
// chooseGreetingLanguage('Spanish') returns 'Hola'
// chooseGreetingLanguage('Mandarin') returns 'Nǐ hǎo'
// chooseGreetingLanguage('Samoan') returns 'Talofa'
// Anything else passed in will return '👋'

function chooseGreetingLanguage(language) {
  switch (language) {
    case 'Te Reo':
      return 'Kia ora'
    case 'English':
      return 'Hello'
    case 'Spanish':
      return 'Hola'
    case 'Mandarin':
      return 'Nǐ hǎo'
    case 'Samoan':
      return 'Talofa'
      break
    default:
      return '👋'
  }
}

// 5. ternary
// We want to check if a user is registered.
// Write a function named `checkUserStatus` that checks if the parameter `isRegistered` is true or false.
// If the user is registered (true), we want them to see the option to 'Log in'.
// If the user is not registered (false), we want them to see the option to 'Register a new account'.
// For example: checkUserStatus(true) should return the string 'Log in', checkUserStatus(false) should return the string 'Register a new account'.
// Use a ternary operator <go to='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'>MDN ternary operator</go>

function checkUserStatus(isRegistered) {
  return isRegistered ? 'Log in' : "Register a new account"
}




// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in Bootcamp.

// Don't change any code below this comment!
const toExport = {}
if (typeof isMatch !== 'undefined') toExport.isMatch = isMatch
if (typeof isAMatch !== 'undefined') toExport.isAMatch = isAMatch
if (typeof greetings !== 'undefined') toExport.greetings = greetings
if (typeof chooseGreetingLanguage !== 'undefined')
  toExport.chooseGreetingLanguage = chooseGreetingLanguage
if (typeof checkUserStatus !== 'undefined')
  toExport.checkUserStatus = checkUserStatus
module.exports = toExport
