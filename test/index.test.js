/* eslint-env jest */
const yarnGlobalPackages = require('../')

test('main', () => {
  expect(typeof yarnGlobalPackages).toBe('function')
})

test('should ok', () => {
  expect(Array.isArray(yarnGlobalPackages())).toBe(true)
})
