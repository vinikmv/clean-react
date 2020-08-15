module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDit>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
