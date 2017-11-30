const test = require('tape')
const buffer = require('./buffers101')

// create an empty buffer of size N
test('testing empty buffer function', function (t) {
  t.plan(5)

  var b0 = buffer.emptyBuffer(0)
  var b1 = buffer.emptyBuffer(6)
  var b2 = buffer.emptyBuffer(28)

  t.equal(b1.byteLength, 6, 'should return a buffer 6 bytes long if given a 6')
  t.deepEqual(b1, Buffer.alloc(6), 'Buffer should be empty')
  t.equal(b2.byteLength, 28, 'should return a buffer 6 bytes long if given a 28')
  t.deepEqual(b2, Buffer.alloc(28), 'Buffer should be empty')
  t.equal(b0.byteLength, 0, 'should return an empty buffer if 0 is given as argument')
})

test('testing `filledBuffer` function', function (t) {
  t.plan(2)

  var b0 = Buffer.alloc(8).fill(10)
  var b1 = Buffer.alloc(6).fill(18)

  t.deepEqual(buffer.filledBuffer(8, 10), b0, 'should return a buffer 8 bytes long, filled with 10s')
  t.deepEqual(buffer.filledBuffer(6, 18), b1, 'should return a buffer 6 bytes long, filled with 18s')
})

test('testing `rangeBuffer` function', function (t) {
  t.plan(2)

  t.deepEqual(buffer.rangeBuffer(), Buffer.from([97, 98, 99, 100, 101, 102, 103, 104, 105, 106]), 'should return a buffer with numbers 97-106')
  t.equal(buffer.rangeBuffer().toString(), 'abcdefghij')
})

// convert a string into a Buffer
test('testing `convertStringToBuffer` function', function (t) {
  t.plan(2)

  t.deepEqual(buffer.convertStringToBuffer('abc'), Buffer.from('abc'), 'Should return a buffer of "abc" with utf8 encoding when called with "abc"')
  t.deepEqual(buffer.convertStringToBuffer('deadbeef'), Buffer.from('deadbeef'), 'should return a buffer from a string')
})
