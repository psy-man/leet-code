import { TestHelper } from '../../utils/test-case';


const isPalindrome = (x) => {
  if (x < 0 || x !== 0 && x % 10 === 0) {
    return false;
  }

  let reversed = 0;
  let num = x;


  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = ~~(num / 10);
  }

  return reversed === x;
};


//////////////// Tests //////////////////////

describe('isPalindrome', () => {
  const test = new TestHelper();

  test.expect(123454321).toEqual(true);
  test.expect(121).toEqual(true);
  test.expect(-121).toEqual(false);
  test.expect(10).toEqual(false);
  test.expect(12345).toEqual(false);

  test.execute(isPalindrome);
});
