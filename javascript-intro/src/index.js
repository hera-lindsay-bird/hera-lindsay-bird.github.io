const variableAnswers = require('./challenge/1-variables')
const functionAnswers = require('./challenge/2-functions')
const operatorAnswers = require('./challenge/3-operators')
const objectAnswers = require('./challenge/4-objects')
const loopAnswers = require('./challenge/7-loops')
const arrayAnswers = require('./challenge/5-arrays')
const conditionalAnswers = require('./challenge/6-conditionals')

const { formatResultsSection } = require('./lib')
const {
  resultsForVariables,
  resultsForFunctions,
  resultsForObjects,
  resultsForArrays,
  resultsForLoops,
  resultsForConditionals,
  resultsForOperators
} = require('./lib/results')

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('results')
  el.innerHTML = buildResults()
})

function buildResults () {
  const variableResults = resultsForVariables(variableAnswers)
  const functionResults = resultsForFunctions(functionAnswers)
  const objectResults = resultsForObjects(objectAnswers)
  const arrayResults = resultsForArrays(arrayAnswers)
  const loopResults = resultsForLoops(loopAnswers)
  const conditionalResults = resultsForConditionals(conditionalAnswers)
  const operatorResults = resultsForOperators(operatorAnswers)

  let output = '<h1>Javascript Intro Results</h1>'
  output += formatResultsSection('Variables', variableResults)
  output += formatResultsSection('Functions', functionResults)
  output += formatResultsSection('Operators', operatorResults)
  output += formatResultsSection('Objects', objectResults)
  output += formatResultsSection('Arrays', arrayResults)
  output += formatResultsSection('Conditionals', conditionalResults)
  output += formatResultsSection('Loops', loopResults)
  return output
}
