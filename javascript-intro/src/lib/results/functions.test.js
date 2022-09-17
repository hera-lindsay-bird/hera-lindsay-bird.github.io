const resultsForFunctions = require('./functions')
describe('2. resultsForFunctions', () => {
  it('defaults to incorrect', () => {
    expect.assertions(11)
    const results = resultsForFunctions({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('1. writes a function returning hello world', () => {
    const hello = () => 'Hello world!'
    const result = resultsForFunctions({ hello })[0]
    expect(result.correct).toBe(true)
  })
  it('2. expects a function returning Hello', () => {
    const sayHi = () => 'Hello!'
    const result = resultsForFunctions({ sayHi })[1]
    expect(result.correct).toBe(true)
  })
  it('3. expects a function returning Goodbye!', () => {
    const sayBye = () => 'Goodbye!'
    const result = resultsForFunctions({ sayBye })[2]
    expect(result.correct).toBe(true)
  })
  it('4. expects a function and a salutation returning Hey there!', () => {
    const greet = () => 'Hey there!'
    const salutation = greet()
    let result = resultsForFunctions({ greet })[3]
    expect(result.correct).toBe(false)
    expect(result.tip).toMatch(/So close/)

    result = resultsForFunctions({ salutation })[3]
    expect(result.correct).toBe(false)

    result = resultsForFunctions({ greet, salutation })[3]
    expect(result.correct).toBe(true)
  })
  it('5. expects welcomeResultIs to be Welcome!', () => {
    const welcomeResultIs = 'Welcome!'
    const result = resultsForFunctions({ welcomeResultIs })[4]
    expect(result.correct).toBe(true)
  })
  it('6. shout returns paramater', () => {
    const shout = (word) => word
    const result = resultsForFunctions({ shout })[5]
    expect(result.correct).toBe(true)
  })
  it('7. replyResult is Good morning', () => {
    const replyResultIs = 'Good morning'
    const result = resultsForFunctions({ replyResultIs })[6]
    expect(result.correct).toBe(true)
  })
  it('8. helloFriend(name) returns Hello name!', () => {
    const helloFriend = (name) => `Hello ${name}!`
    const result = resultsForFunctions({ helloFriend })[7]
    expect(result.correct).toBe(true)
  })
  it('9. goodMorningResultIs is Good morning Jacky!', () => {
    const goodMorningResultIs = 'Good morning Jacky!'
    const result = resultsForFunctions({ goodMorningResultIs })[8]
    expect(result.correct).toBe(true)
  })
  it('10. hiResultIs Hi Andy! Hi Hamish!', () => {
    const hiResultIs = 'Hi Andy! Hi Hamish!'
    const result = resultsForFunctions({ hiResultIs })[9]
    expect(result.correct).toBe(true)
  })
  it('11. warn(name) returns `name name` and console logs result', () => {
    const warn = (str) => `${str} ${str}`
    let result = resultsForFunctions({ warn })[10]
    expect(result.correct).toBe(false)
    expect(result.tip).toMatch(/Nearly/)

    const alertWithConsole = (str) => {
      console.log(warn(str))
      return warn(str)
    }
    result = resultsForFunctions({ warn: alertWithConsole })[10]
    expect(result.correct).toBe(true)
  })
})
