function resultsForArrays ({
  shoppingList,
  treeResult,
  favouriteBrowsers,
  names,
  arrLength
}) {
  return [
    {
      correct: shoppingList !== undefined && shoppingList.includes('Mangosteen') && shoppingList.includes('Kiwifruit') && shoppingList.includes('Longan') && shoppingList.length === 3,
      response: `shoppingList = ${JSON.stringify(shoppingList, null, 2)}`,
      tip: shoppingList !== undefined ? 'Nearly! Double check the values match all of the instructions (the test is case and whitespace sensitive!)' : ''
    },
    {
      correct: treeResult === 'Kahikatea',
      response: `treeResult = ${treeResult}`,
      tip: treeResult !== undefined ? 'Almost there! Make sure you are accessing the first element using square bracket notation.' : ''
    },
    {
      correct: favouriteBrowsers !== undefined && favouriteBrowsers[0] === 'Brave' && favouriteBrowsers[0] !== 'Chrome',
      response: `favouriteBrowsers[0] = ${favouriteBrowsers && favouriteBrowsers[0]}`,
      tip: favouriteBrowsers && favouriteBrowsers[0] !== 'Chrome' ? 'Nearly there! Make sure you are accessing the first element using square bracket notation and then assigning the new value "Brave"' : ''
    },
    {
      correct: names !== undefined && arrLength === names.length && arrLength === 3,
      response: `arrLength = ${arrLength}`,
      tip: arrLength !== undefined ? 'hint: use `.length`' : ''
    }
  ]
}

module.exports = resultsForArrays
