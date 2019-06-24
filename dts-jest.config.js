module.exports = {
  testMatch: [
    '**/__tests__/**/*.dts.ts?(x)',
    '**/?(*.)dts.+(spec|test).ts?(x)',
  ],
  testEnvironment: 'node',
  transform: {
    '(/__tests__/.*|(\\.|/)dts\\.(test|spec))\\.tsx?$': 'dts-jest/transform',
  },
  globals: {
    _dts_jest_: {
      transpile: false,
      test_value: false,
      enclosing_declaration: false,
      compiler_options: 'tsconfig.spec.json',
    },
  },
}
