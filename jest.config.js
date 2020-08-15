module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageForm: ['<rootDit>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};
