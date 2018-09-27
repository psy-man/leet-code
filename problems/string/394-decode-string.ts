import { TestHelper } from '../../utils/test-case';


const decodeString = (s) => {
  let count = 0;
  let result = '';
  let number = '';

  for (let i = 0; i < s.length; i += 1) {
    if (/[0-9]/.test(s[i])) {
      number = '';
      while (s[i] !== '[') {
        number += s[i];
        i += 1;
      }

      count = 1;
      let j = i + 1;

      while (count !== 0) {
        if (s[j] === '[') {
          count += 1;
        }

        if (s[j] === ']') {
          count -= 1;
        }
        j += 1;
      }

      result += decodeString(s.slice(i + 1, j - 1)).repeat(+number);

      i = j - 1;
      continue;
    }

    result += s[i];
  }

  return result;
};


//////////////// Tests //////////////////////

describe('decodeString', () => {
  const test = new TestHelper();

  test.expect('3[a]2[bc]').toEqual('aaabcbc');
  test.expect('3[a2[c]]').toEqual('accaccacc');
  test.expect('2[abc]3[cd]ef').toEqual('abcabccdcdcdef');
  test.expect('q3[a2[c]xyz5[r]q]qwe5[cd]ef').toEqual('qaccxyzrrrrrqaccxyzrrrrrqaccxyzrrrrrqqwecdcdcdcdcdef');
  test.expect('100[leetCode]').toEqual('leetCode'.repeat(100));

  test.execute(decodeString);
});
