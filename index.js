module.exports = function booleanJSONVariables (expression, results) {
  if (results === undefined) {
    results = []
  }
  if (typeof expression === 'string') {
    if (results.indexOf(expression) === -1) {
      results.push(expression)
    }
    return results
  } else if (expression.not) {
    return booleanJSONVariables(expression.not, results)
  } else if (expression.and) {
    return expression.and.reduce(
      function (results, expression) {
        return booleanJSONVariables(expression, results)
      },
      results
    )
  } else if (expression.or) {
    return expression.or.reduce(
      function (results, expression) {
        return booleanJSONVariables(expression, results)
      },
      results
    )
  }
}
