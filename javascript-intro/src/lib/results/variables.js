function resultsForVariables ({ welcome, name, value }) {
  return [
    {
      correct: welcome === 'Hello world',
      response: `welcome = ${welcome}`,
      tip: welcome !== undefined ? 'hint: check you\'ve assigned the right value' : ''
    },
    {
      correct: typeof name === 'string' && name !== 'Old Name',
      response: `name = ${name}`,
      tip: name !== 'Old Name' ? 'hint: make sure you reassign the value of the `name` variable to be your name' : ''
    },
    {
      correct: value === 'Wiremu',
      response: `value = ${value}`,
      tip: value !== undefined ? 'hint: almost! Try reading through it again' : ''
    }
  ]
}

module.exports = resultsForVariables
