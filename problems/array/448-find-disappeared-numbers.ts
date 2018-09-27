import { TestHelper } from '../../utils/test-case';

const findDisappearedNumbers2 = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  return nums.reduce((acc, val, i) => {
    return val > 0 ? [...acc, i + 1] : acc;
  }, []);
};


const findDisappearedNumbers1 = (nums) => {
  if (nums.length === 0) {
    return [];
  }

  const result = new Array(nums.length);

  for (const n of nums) {
    result[n - 1] = true;
  }

  let count = 0;
  for (let i = 0; i < result.length; i += 1) {
    if (!result[i]) {
      result[count++] = i + 1;
    }
  }

  result.length = count;
  return result;
};


const findDisappearedNumbers = (nums) => {
  const max = nums.length;

  const result = [];

  for (let i = 1; i <= max; i += 1) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
};


//////////////// Tests //////////////////////

describe('findDisappearedNumbers', () => {
  const test = new TestHelper();

  test.expect([4, 3, 2, 7, 8, 2, 3, 1]).toEqual([5, 6]);
  test.expect([1, 1, 1, 1, 1]).toEqual([2, 3, 4, 5]);
  test.expect([1, 2]).toEqual([]);

  test.execute(findDisappearedNumbers, findDisappearedNumbers1, findDisappearedNumbers2);
});
