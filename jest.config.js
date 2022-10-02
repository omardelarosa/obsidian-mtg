/** @type {import('ts-jest').JestConfigWithTsJest} */
// import {defaults} from 'jest-config';
module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/jest/globalSetup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$'
};