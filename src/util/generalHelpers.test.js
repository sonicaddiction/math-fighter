import { capitalizeString } from './generalHelpers';

describe('capitalizeString', () => {
  it('makes the first letter in a string uppercase', () => {
    const string = 'test';
    expect(capitalizeString(string)).toBe('Test');
  });
});
