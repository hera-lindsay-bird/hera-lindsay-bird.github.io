const resultsForObjects = require('./objects')
describe('3. resultsForObjects', () => {
  it('defaults to incorrect', () => {
    expect.assertions(3)
    const results = resultsForObjects({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })

  it('1. define a contact object', () => {
    const contact = {
      name: 'Leon Kim',
      address: '123 Main St',
      phone: '021 555 555'
    }
    const result = resultsForObjects({ contact })[0]
    expect(result.correct).toEqual(true)
  })

  it('2. customer is Marta', () => {
    const customer = 'Marta'
    const receipt = { name: 'Marta' }
    const result = resultsForObjects({ customer, receipt })[1]
    expect(result.correct).toEqual(true)
  })

  it('3. person.name is not Navita', () => {
    const person = { name: 'Navita' }
    let result = resultsForObjects({ person })[2]
    expect(result.correct).toEqual(false)

    person.name = 'Anyone'
    result = resultsForObjects({ person })[2]
    expect(result.correct).toEqual(true)
  })
})
