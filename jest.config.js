const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    '(/__tests__/.*\\.dts|\\.dts\\.(test|spec))\\.tsx?$',
  ],
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
}
