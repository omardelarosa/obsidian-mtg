import * as util from 'util'

import { jest } from "@jest/globals";

// Mock http library to avoid using "obsidian" import
jest.mock<typeof import('../src/http')>('../src/http', () => {
  return {
    promiseWrappedRequest: (options: any) => Promise.resolve({} as any)
  }
});

// ref: https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
// ref: https://github.com/jsdom/jsdom/issues/2524
Object.defineProperty(window, 'TextEncoder', {
  writable: true,
  value: util.TextEncoder
});

Object.defineProperty(window, 'TextDecoder', {
  writable: true,
  value: util.TextDecoder
});
