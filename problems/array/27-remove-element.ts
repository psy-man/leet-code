import { TestHelper } from '../../utils/test-case';


const removeElement = function (nums, val) {
  let last = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const n = nums[i];

    if (n !== val) {
      nums[last++] = n;
    }
  }

  return last;
};


//////////////// Tests //////////////////////

describe('removeElement', () => {
  const test = new TestHelper();

  test.expect([0, 1, 2, 2, 3, 0, 4, 2], 2).toEqual([0, 1, 3, 0, 4, 0, 4, 2]);
  test.expect([1, 1, 1, 2, 2, 8], 1).toEqual([2, 2, 8, 2, 2, 8]);

  test.executeInPlace(removeElement);
});
