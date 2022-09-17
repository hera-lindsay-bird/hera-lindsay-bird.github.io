const resultsForOperators = require('./operators')
describe('6. resultsForOperators', () => {
  it('defaults to incorrect', () => {
    expect.assertions(17)
    const results = resultsForOperators({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('1. add', () => {
    const add = (a, b) => a + b
    const result = resultsForOperators({ add })[0]
    expect(result.correct).toEqual(true)
  })
  it('2. minus', () => {
    const minus = (a, b) => a - b
    const result = resultsForOperators({ minus })[1]
    expect(result.correct).toEqual(true)
  })
  it('3. multiply', () => {
    const multiply = (a, b) => a * b
    const result = resultsForOperators({ multiply })[2]
    expect(result.correct).toEqual(true)
  })
  it('4. divide', () => {
    const divide = (a, b) => a / b
    const result = resultsForOperators({ divide })[3]
    expect(result.correct).toEqual(true)
  })
  it('5. increment', () => {
    const increment = (a) => ++a
    const result = resultsForOperators({ increment })[4]
    expect(result.correct).toEqual(true)
  })
  it('6. decrement', () => {
    const decrement = (a) => --a
    const result = resultsForOperators({ decrement })[5]
    expect(result.correct).toEqual(true)
  })
  it('7. and', () => {
    const and = (a, b) => a && b
    const result = resultsForOperators({ and })[6]
    expect(result.correct).toEqual(true)
  })
  it('8. or', () => {
    const or = (a, b) => a || b
    const result = resultsForOperators({ or })[7]
    expect(result.correct).toEqual(true)
  })
  it('9. not', () => {
    const not = (a) => !a
    const result = resultsForOperators({ not })[8]
    expect(result.correct).toEqual(true)
  })
  it('10. isGreaterThan', () => {
    const isGreaterThan = (a, b) => a > b
    const result = resultsForOperators({ isGreaterThan })[9]
    expect(result.correct).toEqual(true)
  })
  it('11. isLessThan', () => {
    const isLessThan = (a, b) => a < b
    const result = resultsForOperators({ isLessThan })[10]
    expect(result.correct).toEqual(true)
  })
  it('12. isGreaterOrEqual', () => {
    const isGreaterOrEqual = (a, b) => a >= b
    const result = resultsForOperators({ isGreaterOrEqual })[11]
    expect(result.correct).toEqual(true)
  })
  it('13. isLessOrEqual', () => {
    const isLessOrEqual = (a, b) => a <= b
    const result = resultsForOperators({ isLessOrEqual })[12]
    expect(result.correct).toEqual(true)
  })
  it('14. isSimilar', () => {
    // eslint-disable-next-line eqeqeq
    const isSimilar = (a, b) => a == b
    const result = resultsForOperators({ isSimilar })[13]
    expect(result.correct).toEqual(true)
  })
  it('15. isSameTypeAndVal', () => {
    // eslint-disable-next-line eqeqeq
    const isSameTypeAndVal = (a, b) => a === b
    const result = resultsForOperators({ isSameTypeAndVal })[14]
    expect(result.correct).toEqual(true)
  })
  it('16. isNotSimilar', () => {
    // eslint-disable-next-line eqeqeq
    const isNotSimilar = (a, b) => a != b
    const result = resultsForOperators({ isNotSimilar })[15]
    expect(result.correct).toEqual(true)
  })
  it('17. isNotSameTypeOrVal', () => {
    // eslint-disable-next-line eqeqeq
    const isNotSameTypeOrVal = (a, b) => a !== b
    const result = resultsForOperators({ isNotSameTypeOrVal })[16]
    expect(result.correct).toEqual(true)
  })
})
