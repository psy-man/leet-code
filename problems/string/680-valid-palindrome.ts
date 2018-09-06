import { TestHelper } from '../../utils/test-case';

const validPalindrome1 = function (s, fails = 0) {
  if (s.length <= 2) {
    return true;
  }
  if (fails > 1) {
    return false;
  }

  let from = 0;
  let to = s.length - 1;

  while (from <= to) {
    if (s[from] === s[to]) {
      from += 1;
      to -= 1;
    } else if (s.length === 3) {
      return false;
    } else {
      if (fails === 0) {
        return validPalindrome1(s.slice(from, to), 1) || validPalindrome1(s.slice(from + 1, to + 1), 1);
      }

      return false;
    }
  }

  return true;
};


const validPalindrome2 = function (s, failed = false) {
  let from = 0;
  let to = s.length - 1;

  while (from <= to) {
    if (s[from] !== s[to]) {
      if (failed === true) {
        return false;
      }

      return validPalindrome2(s.slice(from, to), true) || validPalindrome2(s.slice(from + 1, to + 1), true);
    }

    from += 1;
    to -= 1;
  }

  return true;
};




//////////////// Tests //////////////////////

describe('validPalindrome', () => {
  const test = new TestHelper();

  test.expect('aabdeenddbaagbddeedbaa').toEqual(false);
  test.expect('yd').toEqual(true);
  test.expect('tebbem').toEqual(false);
  test.expect('abc').toEqual(false);
  test.expect('abca').toEqual(true);
  test.expect('acbca').toEqual(true);
  test.expect('deeee').toEqual(true);
  test.expect('eeeed').toEqual(true);
  test.expect('lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul').toEqual(true);

  test.execute(validPalindrome1, validPalindrome2);
});
