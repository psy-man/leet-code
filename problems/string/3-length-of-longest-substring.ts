import { TestHelper } from '../../utils/test-case';


const lengthOfLongestSubstring3 = (s) => {
  let i = 0;
  let j = 0;
  let max = 0;

  for (i; i < s.length; i += 1) {
    const index = s.indexOf(s[i], j);

    if (index > -1 && i > index) {
      max = Math.max(max, i - j);
      j = index + 1;
    }
  }

  return Math.max(max, i - j);
};


const lengthOfLongestSubstring2 = (s) => {
  const seen = [];
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (!seen.includes(char)) {
      seen.push(char);
    } else {
      while (seen.length && seen[0] !== char) {
        seen.shift();
      }
      seen.push(seen.shift());
    }

    max = Math.max(max, seen.length);
  }

  return max;
};


// Brute force :)
const lengthOfLongestSubstring1 = (s) => {
  const seen = new Set();
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    for (let q = i; q < s.length; q += 1) {
      if (!seen.has(s[q])) {
        seen.add(s[q]);
      } else {
        max = max = Math.max(seen.size, max);
        seen.clear();
        break;
      }
    }
  }

  return Math.max(max, seen.size);
};

//////////////// Tests //////////////////////

describe('lengthOfLongestSubstring', () => {
  const test = new TestHelper();

  test.expect('').toEqual(0);
  test.expect('g').toEqual(1);
  test.expect('abcabcbb').toEqual(3);
  test.expect('bbbbb').toEqual(1);
  test.expect('pwwkew').toEqual(3);
  test.expect('dvdf').toEqual(3);
  test.expect('12345').toEqual(5);
  test.expect('12345678904abcdefgklmnop').toEqual(20);

  test.execute(lengthOfLongestSubstring1, lengthOfLongestSubstring2, lengthOfLongestSubstring3);
});
