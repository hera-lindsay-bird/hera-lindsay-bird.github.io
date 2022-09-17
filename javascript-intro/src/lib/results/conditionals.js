const { buildMultipleFunctionResult } = require('../')
function resultsForConditionals ({
  isMatch,
  isAMatch,
  greetings,
  chooseGreetingLanguage,
  checkUserStatus
}) {
  return [
    buildMultipleFunctionResult(isMatch, [
      [[1, 2], undefined],
      [[1, '1'], undefined],
      [[2, 2], 'Match']
    ]),
    buildMultipleFunctionResult(isAMatch, [
      [[1, 2], 'Not a Match'],
      [[2, 2], 'Match'],
      [[1, '1'], 'Not a Match']
    ]),
    buildMultipleFunctionResult(greetings, [
      [['Te Reo'], 'Kia ora'],
      [['English'], 'Hello'],
      [[], '👋']
    ]),
    chooseGreetingLanguageResults(chooseGreetingLanguage),
    checkUserStatusResult(checkUserStatus)
  ]
}

function chooseGreetingLanguageResults (fn) {
  if (!fn) {
    return {
      correct: false,
      tip: 'chooseGreetingLanguage is not defined'
    }
  }
  if (fn.toString().match(/if/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'chooseGreetingLanguage must not use an if statement'
    }
  }
  if (!fn.toString().match(/switch/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'chooseGreetingLanguage must use a switch statement'
    }
  }

  const inputs = [
    [['Te Reo'], 'Kia ora'],
    [['English'], 'Hello'],
    [['Spanish'], 'Hola'],
    [['Mandarin'], 'Nǐ hǎo'],
    [['Samoan'], 'Talofa'],
    [['whatever'], '👋']
  ]

  return buildMultipleFunctionResult(fn, inputs)
}

function checkUserStatusResult (fn) {
  if (!fn) {
    return {
      correct: false,
      tip: 'checkUserStatus is not defined'
    }
  }
  if (fn.toString().match(/if/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'checkUserStatus should not use an if statement'
    }
  }
  if (!fn.toString().match(/\?.*:/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'checkUserStatus must use a ternary operator'
    }
  }
  return buildMultipleFunctionResult(fn, [
    [[true], 'Log in'],
    [[false], 'Register a new account']
  ])
}

module.exports = resultsForConditionals
