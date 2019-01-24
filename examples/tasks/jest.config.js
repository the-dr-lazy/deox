const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^utils(.*)': '<rootDir>/src/utils$1',
    '^store(.*)': '<rootDir>/src/store$1',
    '^app(.*)': '<rootDir>/src/app$1',
  },
}
