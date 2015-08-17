```javascript
var variables = require('boolean-json-variables')
var assert = require('assert')
```

`variables` takes a [boolean-json](https://npmjs.com/packages/boolean-json-schema) object argument and returns an array of strings.

```javascript
assert.deepEqual(
  variables({
    and: [
      { or: [ 'x', 'y' ] },
      { not: 'z' } ] })
    .sort(),
  [ 'x', 'y', 'z' ])

assert.deepEqual(
  variables({
    and: [
      { or: [ 'a', 'b' ] },
      { and: [ 'a', 'c' ] } ] })
    .sort(),
  [ 'a', 'b', 'c' ])
```
