// ------------ ARRAYS -----------

// 1. Define an array named `shoppingList`. This array should contain:
// Three strings that are the following fruit names: 'Kiwifruit', 'Mangosteen', 'Longan'.

let shoppingList = ['Kiwifruit', 'Mangosteen', 'Longan']

// 2. Declare a variable named `treeResult` and assign it the value of the first element from the `trees` array.
// n.b. the code should work even if you were to change the array elements. `treeResult` should always retrieve the first element from `trees`.
const trees = ['Kahikatea', 'Cherry Blossom', 'Paogo']
// Write your code below this comment
let treeResult = trees[0]

// 3. Below is an array named `favouriteBrowsers`. Write some code that will reassign the value of the first element with the string 'Brave'.
const favouriteBrowsers = ['Chrome', 'Firefox']
// Write your code below this comment
favouriteBrowsers[0] = 'Brave'

// 4. Declare a variable named `arrLength` and assign it the value of the length of the `names` array.
// n.b the code should work even if you were to change the total number of array elements.
const names = ['Yuko', 'Amanda', 'Kahu']
// Write your code below this comment
let arrLength = names.length
// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  favouriteBrowsers,
  names,
}
if (typeof shoppingList !== 'undefined') toExport.shoppingList = shoppingList
if (typeof treeResult !== 'undefined') toExport.treeResult = treeResult
if (typeof arrLength !== 'undefined') toExport.arrLength = arrLength
module.exports = toExport
