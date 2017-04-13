```javascript
var variables = require('boolean-json-variables')
```

The package exports a function of one [boolean-json](https://npmjs.com/packages/boolean-json-schema) argument. It returns an array of string variable names.

```javascript
var assert = require('assert')

assert.deepEqual(
  variables({
    and: [
      {or: ['w', 'x', 'y']},
      {not: 'z'}
    ]
  }).sort(),
  ['w', 'x', 'y', 'z']
)

assert.deepEqual(
  variables({
    and: [
      {or: ['a', 'b', 'c', 'd']},
      {and: ['a', 'c']}
    ]
  }).sort(),
  ['a', 'b', 'c', 'd']
)
```
