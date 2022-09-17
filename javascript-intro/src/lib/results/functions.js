const { buildFunctionResult, buildMultipleFunctionResult } = require('../')
function resultsForFunctions ({
  hello,
  sayHi,
  sayBye,
  greet,
  salutation,
  welcomeResultIs,
  shout,
  replyResultIs,
  helloFriend,
  goodMorningResultIs,
  hiResultIs,
  warn
}) {
  const greetResult = buildFunctionResult(greet, [], 'Hey there!')
  if (greetResult.correct && salutation !== 'Hey there!') {
    greetResult.correct = false
    greetResult.response = salutation
    greetResult.tip = "almost there! Don't forget to assign the result to the `salutation` variable"
  }

  const oldConsole = console.log
  let logResult
  console.log = str => { logResult = str }
  const warnResult = buildFunctionResult(warn, ['Fire'], 'Fire Fire')
  console.log = oldConsole
  if (warnResult.correct && logResult !== 'Fire Fire') {
    warnResult.correct = false
    warnResult.response = logResult
    warnResult.tip = 'Nearly! Remember to console.log the value before returning the value.'
  }

  return [
    buildFunctionResult(hello, [], 'Hello world!'),
    buildFunctionResult(sayHi, [], 'Hello!'),
    buildFunctionResult(sayBye, [], 'Goodbye!'),
    greetResult,
    {
      correct: welcomeResultIs === 'Welcome!',
      response: `welcomeResultIs = ${welcomeResultIs}`,
      tip: welcomeResultIs !== undefined ? 'Remember to assign the value of `welcomeResult` to the variable `welcomeResultIs` (hint: it will be a string).' : ''
    },
    buildMultipleFunctionResult(shout, [
      [['Echo'], 'Echo'],
      [['Word'], 'Word']
    ]),
    {
      correct: replyResultIs === 'Good morning',
      response: `replyResultIs = ${replyResultIs}`,
      tip: replyResultIs !== undefined ? 'Remember to assign the value of `replyResultIs` with the value of `replyResult` (hint: it will be a string).' : ''
    },
    buildFunctionResult(helloFriend, ['Emily'], 'Hello Emily!'),
    {
      correct: goodMorningResultIs === 'Good morning Jacky!',
      response: `goodMorningResultIs = ${goodMorningResultIs}`,
      tip: goodMorningResultIs !== undefined ? 'Remember to assign the value of `goodMorningResultIs` with the value of `goodMorningResult` (hint: it will be a string).' : ''
    },
    {
      correct: hiResultIs === 'Hi Andy! Hi Hamish!',
      response: `hiResultIs = ${hiResultIs}`,
      tip: hiResultIs !== undefined ? 'Remember to assign the value of `hiResultIs` with the value of `hiResult` (hint: it will be a string).' : ''
    },
    warnResult
  ]
}

module.exports = resultsForFunctions
