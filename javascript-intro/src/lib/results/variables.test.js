const resultsForVariables = require('./variables')
describe('1. resultsForVariables', () => {
  it('defaults to incorrect', () => {
    expect.assertions(3)
    const results = resultsForVariables({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('1. defines hello world', () => {
    const result = resultsForVariables({ welcome: 'Hello world' })[0]
    expect(result.correct).toBe(true)
  })
  it('2. redefines name', () => {
    const result = resultsForVariables({ name: 'Anyone' })[1]
    expect(result.correct).toBe(true)
  })
  it('3. picks correct value', () => {
    const result = resultsForVariables({ value: 'Wiremu' })[2]
    expect(result.correct).toBe(true)
  })
})
