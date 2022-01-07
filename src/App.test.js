import { testFunction } from '../src/Utilities/ExampleUtilities.js';

test('app test', () => {
  expect('test').toBeTruthy();
});

test('example test', () => {
  expect(testFunction()).toBeTruthy();
});
