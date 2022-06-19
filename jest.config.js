const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~components/(.*)$': ['<rootDir>/src/components/$1'],
    '^~assets/(.*)$': ['<rootDir>/src/assets/$1'],
    '^~models/(.*)$': ['<rootDir>/src/models/$1'],
    '^~images': ['<rootDir>/src/assets/images/index.ts'],
    '^~utils/(.*)$': ['<rootDir>/src/utils/$1'],
    '^~constants': ['<rootDir>/src/constants/index.ts'],
    '^~fonts/(.*)$': ['<rootDir>/src/assets/fonts/$1'],
    '^~icons/(.*)$': ['<rootDir>/src/assets/icons/$1'],
    '^~styles/(.*)$': ['<rootDir>/src/styles/$1'],
    '^~config': ['config.ts'],
    '^~apis/(.*)$': ['<rootDir>/src/apis/$1'],
    '^~states': ['<rootDir>/src/states/index.ts'],
    '^~types/(.*)$': ['<rootDir>/src/types/$1'],
  },
};

module.exports = createJestConfig(customJestConfig);
