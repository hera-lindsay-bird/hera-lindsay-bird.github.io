const resultsForConditionals = require('./conditionals')
describe('5. resultsForConditionals', () => {
  it('defaults to incorrect', () => {
    expect.assertions(5)
    const results = resultsForConditionals({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('1. isMatch returns "Match" for strict equality and undefined when no match', () => {
    let isMatch = () => {}
    let result = resultsForConditionals({ isMatch })[0]
    expect(result.correct).toEqual(false)

    // eslint-disable-next-line eqeqeq
    isMatch = (a, b) => a != b ? 'Match' : undefined
    result = resultsForConditionals({ isMatch })[0]
    expect(result.correct).toEqual(false)

    // eslint-disable-next-line eqeqeq
    isMatch = (a, b) => a == b ? 'Match' : undefined
    result = resultsForConditionals({ isMatch })[0]
    expect(result.correct).toEqual(false)

    isMatch = (a, b) => a === b ? 'Match' : undefined
    result = resultsForConditionals({ isMatch })[0]
    expect(result.correct).toEqual(true)
  })

  it('2. isAMatch returns "Match" for strict equality and "Not a Match" when not', () => {
    let isAMatch = () => {}
    let result = resultsForConditionals({ isAMatch })[1]
    expect(result.correct).toEqual(false)

    // eslint-disable-next-line eqeqeq
    isAMatch = (a, b) => a != b ? 'Match' : 'Not a Match'
    result = resultsForConditionals({ isAMatch })[1]
    expect(result.correct).toEqual(false)

    // eslint-disable-next-line eqeqeq
    isAMatch = (a, b) => a == b ? 'Match' : 'Not a Match'
    result = resultsForConditionals({ isAMatch })[1]
    expect(result.correct).toEqual(false)

    isAMatch = (a, b) => a === b ? 'Match' : 'Not a Match'
    result = resultsForConditionals({ isAMatch })[1]
    expect(result.correct).toEqual(true)
  })
  it('3. greetings responds with appropriate greeting', () => {
    let greetings = () => {}
    let result = resultsForConditionals({ greetings })[2]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/Kia ora/)

    greetings = () => 'Kia ora'
    result = resultsForConditionals({ greetings })[2]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/Hello/)

    greetings = (str) => {
      if (str === 'Te Reo') return 'Kia ora'
      if (str === 'English') return 'Hello'
    }
    result = resultsForConditionals({ greetings })[2]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch('👋')

    greetings = (str) => {
      if (str === 'Te Reo') return 'Kia ora'
      if (str === 'English') return 'Hello'
      return '👋'
    }
    result = resultsForConditionals({ greetings })[2]
    expect(result.correct).toEqual(true)
  })

  it('4. chooseGreetingLanguage', () => {
    let chooseGreetingLanguage = () => {}
    let result = resultsForConditionals({ chooseGreetingLanguage })[3]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/switch statement/)

    chooseGreetingLanguage = (language) => {
      switch (language) {
        case 'English':
          return 'Hello'
      }
      if (language) {
        return ''
      }
    }
    result = resultsForConditionals({ chooseGreetingLanguage })[3]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/if statement/)

    chooseGreetingLanguage = (language) => {
      switch (language) {
        case 'Te Reo':
          return 'Kia ora'
        case 'English':
          return 'Hello'
        case 'Spanish':
          return 'Hola'
        case 'French':
          return 'Bonjour'
        case 'Dutch':
          return 'Hallo'
        case 'Mandarin':
          return 'Nǐ hǎo'
        case 'Samoan':
          return 'Talofa'
        case 'Tagalog':
          return 'Kamusta'
        default:
          return '👋'
      }
    }

    result = resultsForConditionals({ chooseGreetingLanguage })[3]
    expect(result.correct).toEqual(true)
  })

  it('5. checkUserStatus should use a ternary operator', () => {
    let checkUserStatus = () => {}
    let result = resultsForConditionals({ checkUserStatus })[4]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/ternary operator/)

    checkUserStatus = (bool) => {
      if (bool) return 'Log in'
      return 'Register a new account'
    }
    result = resultsForConditionals({ checkUserStatus })[4]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/not use if/)

    checkUserStatus = (bool) => bool ? 'Log in' : 'Register a new account'
    result = resultsForConditionals({ checkUserStatus })[4]
    expect(result.correct).toEqual(true)
  })
})
