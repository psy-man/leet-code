import { TestHelper } from '../../utils/test-case';


const mooreVoting = (nums) => {
  let count = 1;
  let ret = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (count === 0) {
      ret = nums[i];
    }

    if (nums[i] !== ret) {
      count -= 1;
    } else {
      count += 1;
    }
  }

  return ret;
};


const majorityElement = (nums) => {
  const seen = new Map();

  for (const n of nums) {
    const count = (seen.get(n) || 0) + 1;

    if (count > nums.length / 2) {
      return n;
    }

    seen.set(n, count);
  }
};


//////////////// Tests //////////////////////

describe('majorityElement', () => {
  const test = new TestHelper();

  test.expect([2,2,1,1,1,2,2]).toEqual(2);
  test.expect([3,2,3]).toEqual(3);
  test.expect([1]).toEqual(1);

  test.execute(majorityElement, mooreVoting);
});
