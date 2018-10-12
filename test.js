const assert = require('assert')
const take = require('./take')

describe('take', function () {
  it("_.take(['1', '2', '3']) equalTo ['1']", function () {
    assert.deepStrictEqual(take(['1', '2', '3']), ['1'])
  })
  it("_.take(['1', '2', '3'],2) equalTo ['1', '2']", function () {
    assert.deepStrictEqual(take(['1', '2', '3'],2), ['1', '2'])
  })
  it("_.take(['1', '2', '3'],5) equalTo ['1', '2','3']", function () {
    assert.deepStrictEqual(take(['1', '2', '3'],5), ['1', '2','3'])
  })
  it("_.take(['1', '2', '3'],0) equalTo []", function () {
    assert.deepStrictEqual(take(['1', '2', '3'],0), [])
  })
  
})