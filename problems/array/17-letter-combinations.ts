import { TestHelper } from '../../utils/test-case';


const letterCombinations = (digits) => {
  if (!digits) {
    return [];
  }

  const phone = new Map([
    ['2', 'abc'], ['3', 'def'],
    ['4', 'ghi'], ['5', 'jkl'], ['6', 'mno'],
    ['7', 'pqrs'], ['8', 'tuv'], ['9', 'wxyz']
  ]);

  const result = [];

  const rec = (nums, buffer = []) => {
    const cur = phone.get(nums[0]);

    for (const d of cur) {
      if (nums.length > 1) {
        rec(nums.substring(1), [...buffer, d]);
      } else {
        result.push([...buffer, d].join(''));
      }
    }

    return result;
  };


  return rec(digits)
};


//////////////// Tests //////////////////////

describe('letterCombinations', () => {
  const test = new TestHelper();

  test.expect('').toEqual([]);
  test.expect('23').toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
  test.expect('97')
    .toEqual(["wp", "wq", "wr", "ws", "xp", "xq", "xr", "xs", "yp", "yq", "yr", "ys", "zp", "zq", "zr", "zs"]);

  test.execute(letterCombinations);
});
