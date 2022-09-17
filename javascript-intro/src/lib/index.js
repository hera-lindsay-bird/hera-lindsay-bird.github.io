function buildFunctionResult(fn, inputs, expected, noMatchTip = '') {
  if (!fn) {
    return {
      correct: false,
      response: undefined,
      tip: 'function was not defined',
    }
  } else if (typeof fn !== 'function') {
    return {
      correct: false,
      response: fn,
      tip: 'is not a function',
    }
  }
  const matches = fn.toString().match(/function\s*(\w*)/)
  const name = matches ? matches[1] : ''

  let actual
  let tip
  try {
    actual = fn(...inputs)
  } catch (e) {
    tip = e
  }
  if (actual !== expected) {
    tip = noMatchTip || `Expected: ${expected}`
  }
  return {
    correct: actual === expected,
    response: name
      ? `${name}(${toArgs(inputs)}) returned ${toArg(actual)}`
      : '',
    tip,
  }
}

function buildMultipleFunctionResult(fn, calls) {
  let responses = ''
  let result
  for (const params of calls) {
    const [inputs, returnVal] = params
    result = buildFunctionResult(fn, inputs, returnVal)
    responses += result.response + '<br/>'
    if (!result.correct) return result
  }
  result.response = responses
  return result
}

function formatResultsSection(title, results) {
  const output = `<div class='results'>
    <h2>${title}</h2>
    <ol>
    ${formatResults(results)}
    </ol>
  </div>`
  return output
}

function formatResults(results) {
  return results.map(formatResult).join('')
}

function formatResult({ correct, response, tip }) {
  if (!tip) tip = ''
  return `<li class="${correct ? 'tick' : 'cross'}">
    ${response}
    </li>
    ${correct ? '' : tip}
    `
}

function toArgs(inputs) {
  return inputs.map(toArg).join(', ')
}

function toArg(input) {
  if (typeof input === 'string') {
    return `'${input}'`
  } else if (typeof input === 'object' && input.length) {
    return input.map((i) => toArg(i)).join(', ')
  } else {
    return input
  }
}
module.exports = {
  buildFunctionResult,
  buildMultipleFunctionResult,
  formatResultsSection,
}
