import { TestHelper } from '../../utils/test-case';


/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let k = 1;
  let prev = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const curr = nums[i];

    if (curr !== prev) {
      nums[k++] = curr;
      prev = curr;
    }
  }

  return k;
};


//////////////// Tests //////////////////////

describe('removeDuplicates', () => {
  const test = new TestHelper();

  test.expect([0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5], 3).toEqual(6);
  test.expect([1, 2, 3, 3, 4, 5], 5).toEqual(5);

  test.execute(removeDuplicates);
});
