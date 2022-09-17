function resultsForObjects ({
  contact,
  receipt,
  customer,
  person
}) {
  return [
    {
      correct: contact?.name === 'Leon Kim' && contact?.address === '123 Main St' && contact?.phone === '021 555 555',
      response: `contact = ${JSON.stringify(contact, null, 2)}`,
      tip: contact?.name !== undefined ? 'Nearly! Double check the values match all of the instructions (the test is case and whitespace sensitive!)' : ''
    },
    {
      correct: customer === 'Marta' && customer === receipt?.name,
      response: `customer = ${JSON.stringify(customer, null, 2)}`,
      tip: customer !== undefined ? 'Nearly, try using dot notation to access the value of `name` from the `receipt` object' : ''
    },
    {
      correct: person?.name !== undefined && person?.name !== 'Navita',
      response: `person.name = ${person?.name}`,
      tip: person?.name === 'Navita' ? 'hint: Try using dot notation to access the `person` object\'s `name` property and then assign a new value!' : ''
    }
  ]
}

module.exports = resultsForObjects
