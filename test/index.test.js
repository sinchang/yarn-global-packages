/* eslint-env jest */
const yarnGlobalPackages = require('../')

test('main', () => {
  expect(typeof yarnGlobalPackages).toBe('function')
})
