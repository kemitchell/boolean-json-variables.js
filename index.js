function booleanJSONVariables(expression, results) {
  if (results === undefined) {
    results = [ ] }
  if (typeof expression === 'string') {
    if (results.indexOf(expression) === -1) {
      results.push(expression) }
    return results }
  else if ('not' in expression) {
    return booleanJSONVariables(expression.not, results) }
  else if ('and' in expression) {
    return expression.and
      .reduce(
        function(results, expression) {
          return booleanJSONVariables(expression, results) },
        results) }
  else if ('or' in expression) {
    return expression.or
      .reduce(
        function(results, expression) {
          return booleanJSONVariables(expression, results) },
        results) } }

module.exports = booleanJSONVariables
