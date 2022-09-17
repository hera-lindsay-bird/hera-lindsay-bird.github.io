const resultsForArrays = require('./arrays')
describe('2. resultsForFunctions', () => {
  it('defaults to incorrect', () => {
    expect.assertions(4)
    const results = resultsForArrays({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('1. defines a shopping list', () => {
    const shoppingList = ['Kiwifruit', 'Mangosteen', 'Longan']
    const result = resultsForArrays({ shoppingList })[0]
    expect(result.correct).toEqual(true)
  })
  it('2. treeResult is Kahikatea', () => {
    const treeResult = 'Kahikatea'
    const result = resultsForArrays({ treeResult })[1]
    expect(result.correct).toEqual(true)
  })
  it('3. reassign first element of favouriteBrowsers to brave', () => {
    const favouriteBrowsers = ['Brave', 'Firefox']
    const result = resultsForArrays({ favouriteBrowsers })[2]
    expect(result.correct).toEqual(true)
  })
  it('4. arrLength should be 3', () => {
    const arrLength = 3
    const names = ['a', 'b', 'c']
    const result = resultsForArrays({ names, arrLength })[3]
    expect(result.correct).toEqual(true)
  })
})
