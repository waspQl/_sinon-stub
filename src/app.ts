import sinon from 'sinon'

import assert from 'assert'

const stub  = sinon.stub()

const randomNum = (): number => {
  return Math.floor(Math.random() * 10000)
}

// 未設定時はundefinedを返す
assert.equal(stub(randomNum()), undefined)

// default設定
// stub() か 未設定の引数が設定された時にdefaultResNumを返す
const defaultResNum = randomNum()
stub.returns(defaultResNum)
assert.equal(
  stub(),
  defaultResNum
)
assert.equal(
  stub(randomNum()),
  defaultResNum
)

// 引数受取時の動作
const argNum = randomNum()
const argErrorNum = randomNum()
const argResNum = randomNum()
// 1. 正常系
stub.withArgs(argNum).returns(argResNum)
assert.equal(
  stub(argNum),
  argResNum
)
// 2. 異常系
stub.withArgs(argErrorNum).throws('Error')
assert.throws(
  stub.bind(null, argErrorNum),
  Error
)
