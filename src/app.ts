import sinon from 'sinon'

import assert from 'assert'

const stub  = sinon.stub()

stub.returns(7)
assert.equal(stub(), 7)

stub.withArgs(42).returns(1)
assert.equal(stub(42), 1)

stub.withArgs(1).throws('Error')
assert.throws(
  stub(1),
  (() => { throw new Error('Error') })
)
