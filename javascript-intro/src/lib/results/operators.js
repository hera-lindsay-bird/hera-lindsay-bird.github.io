const { buildMultipleFunctionResult } = require('../')
function resultsForOperators ({
  add,
  minus,
  multiply,
  divide,
  increment,
  decrement,
  and,
  or,
  not,
  isGreaterThan,
  isLessThan,
  isGreaterOrEqual,
  isLessOrEqual,
  isSimilar,
  isSameTypeAndVal,
  isNotSimilar,
  isNotSameTypeOrVal
}) {
  return [
    buildMultipleFunctionResult(add, [
      [[1, 2], 3],
      [[2, 3], 5],
      [[5, -1], 4]
    ]),
    buildMultipleFunctionResult(minus, [
      [[3, 2], 1],
      [[3, -2], 5]
    ]),
    buildMultipleFunctionResult(multiply, [
      [[3, 2], 6],
      [[3, -20], -60]
    ]),
    buildMultipleFunctionResult(divide, [
      [[10, 2], 5],
      [[20, 5], 4]
    ]),
    buildMultipleFunctionResult(increment, [
      [[10], 11],
      [[1], 2]
    ]),
    buildMultipleFunctionResult(decrement, [
      [[10], 9],
      [[-1], -2]
    ]),
    buildMultipleFunctionResult(and, [
      [[true, false], false],
      [[true, true], true]
    ]),
    buildMultipleFunctionResult(or, [
      [[false, false], false],
      [[false, true], true]
    ]),
    buildMultipleFunctionResult(not, [
      [[true], false],
      [[false], true]
    ]),
    buildMultipleFunctionResult(isGreaterThan, [
      [[3, 2], true],
      [[2, 2], false],
      [[1, 2], false]
    ]),
    buildMultipleFunctionResult(isLessThan, [
      [[2, 3], true],
      [[3, 3], false],
      [[3, 2], false]
    ]),
    buildMultipleFunctionResult(isGreaterOrEqual, [
      [[3, 2], true],
      [[2, 2], true],
      [[1, 2], false]
    ]),
    buildMultipleFunctionResult(isLessOrEqual, [
      [[2, 3], true],
      [[3, 3], true],
      [[3, 2], false]
    ]),
    buildMultipleFunctionResult(isSimilar, [
      [[2, '2'], true],
      [[2, 1], false],
      [[2, 2], true]
    ]),
    buildMultipleFunctionResult(isSameTypeAndVal, [
      [['1', 1], false],
      [[2, 2], true]
    ]),
    buildMultipleFunctionResult(isNotSimilar, [
      [['1', 1], false],
      [[2, '3'], true]
    ]),
    buildMultipleFunctionResult(isNotSameTypeOrVal, [
      [['1234', 1234], true],
      [[12, 12], false],
      [[12, 123], true]
    ])
  ]
}

module.exports = resultsForOperators
