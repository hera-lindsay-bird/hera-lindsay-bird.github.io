const { buildFunctionResult, buildMultipleFunctionResult } = require('../')
function resultsForLoops ({
  numberPrintResultCalls,
  logNames,
  printCountdown,
  countShortNames,
  everySecondItem
}) {
  return [
    {
      correct: numberPrintResultCalls === 4,
      response: `numberPrintResultCalls = ${numberPrintResultCalls}`
    },
    alertResult(logNames),
    printCountdownResult(printCountdown),
    countShortNamesResult(countShortNames),
    everySecondItemResult(everySecondItem)
  ]
}

function alertResult (logNames) {
  const oldConsole = console.log
  const logResults = []
  console.log = str => { logResults.push(str) }
  const result = buildFunctionResult(logNames, [['Alice', 'Bob', 'Alan', 'Ada']], undefined)
  console.log = oldConsole
  if (result.correct) {
    result.response = `console.log called ${logResults.length} times ` + (logResults.length > 0 ? `with ${logResults.join(', ')}` : '')
    if (logResults.length === 0) {
      result.correct = false
      result.tip = 'Remember to call console.log for each name inside the loop'
    } else if (logResults.length !== 4) {
      result.correct = false
      result.tip = 'You need to call console.log once for each name in the array (hint: maybe double check your `for` loop conditions)'
    } else if (logResults.join(',') !== 'Alice,Bob,Alan,Ada') {
      result.correct = false
      result.tip = 'You need to call console.log once for each name in the array'
    }
  }
  return result
}

function printCountdownResult (printCountdown) {
  const oldConsole = console.log
  const logResults = []
  console.log = str => { logResults.push(str) }
  const result = buildFunctionResult(printCountdown, [['blast off', 'one', 'two', 'three']], undefined)
  console.log = oldConsole

  if (result.correct) {
    result.response = `console.log called ${logResults.length} times ` + (logResults.length > 0 ? `with ${logResults.join(' ')}` : '')
    if (logResults.length === 0) {
      result.correct = false
      result.tip = 'Remember to call console.log for each string inside the `for` loop'
    } else if (logResults.length !== 4) {
      result.correct = false
      result.tip = 'Double check your `for` loop conditions'
    } else if (logResults.join(' ') !== 'three! two! one! blast off!') {
      result.correct = false
      result.tip = 'You need to call console.log once for each string in the array with an exclamation mark'
    }
  }
  return result
}

function countShortNamesResult (countShortNames) {
  if (!countShortNames) {
    return {
      correct: false,
      response: undefined,
      tip: 'countShortNames function was not defined'
    }
  }
  if (!countShortNames.toString().match(/for.*of/)) {
    return {
      correct: false,
      tip: 'You need to use for ... of'
    }
  }
  return buildMultipleFunctionResult(countShortNames, [
    [[['sue', 'alice', 'henry', 'bob']], 2]
  ])
}

function everySecondItemResult (everySecondItem) {
  if (!everySecondItem) {
    return {
      correct: false,
      response: undefined,
      tip: 'everySecondItem function was not defined'
    }
  }
  if (!everySecondItem.toString().match(/forEach/)) {
    return {
      correct: false,
      tip: 'You need to use forEach'
    }
  }
  const args = ['sue', 1, 'henry', 'bob', 3, 4]
  const res = everySecondItem(args)
  if (!res) {
    return {
      correct: false,
      response: `everySecondItem(${args}) returned undefined`
    }
  }
  const result = {
    response: `everySecondItem(${args}) returned ${res.join(',')}`
  }
  if (res.join(',') === '1,bob,4') {
    result.correct = true
  } else {
    result.correct = false
  }
  return result
}

module.exports = resultsForLoops
