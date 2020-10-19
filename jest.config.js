const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./tsconfig.json')

module.exports = {
    preset: 'ts-jest',
    testPathIgnorePatterns: ['(/__tests__/.*\\.dts|\\.dts\\.(test|spec))\\.tsx?$'],
    roots: ['src'],
    testEnvironment: 'node',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!**/__tests__/**'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.spec.json',
        },
    },
}
