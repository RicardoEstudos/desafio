module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1'
    }
  }