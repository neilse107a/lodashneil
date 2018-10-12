const assert = require('assert')
const take = require('./take')

describe('take', function () {
  it("_.take(['1', '2', '3']) equalTo ['1']", function () {
    assert.deepStrictEqual(take(['1', '2', '3']), ['1'])
  })
  
})