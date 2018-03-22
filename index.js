const yarnModules = require('yarn-global-modules')
const fs = require('fs')

module.exports = () => {
  const path = yarnModules() + '/package.json'
  const packages = JSON.parse(fs.readFileSync(path).toString()).dependencies
  return Object.keys(packages).map(k => {
    return {
      name: k,
      version: packages[k]
    }
  })
}
