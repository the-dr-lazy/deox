module.exports = {
  runner: 'jest-runner-tsc',
  displayName: 'tsc',
  testPathIgnorePatterns: [
    '(/__tests__/.*\\.dts|\\.dts\\.(test|spec))\\.tsx?$',
  ],
  roots: ['src'],
  testEnvironment: 'node',
}
