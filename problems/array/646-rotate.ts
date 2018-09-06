import { TestHelper } from '../../utils/test-case';


const rotate1 = (nums, k) => {
  const leftPart = nums.slice(-k);
  const rightPart = nums.slice(0, nums.length - k);

  return leftPart.concat(rightPart);
};

const rotate2 = (nums, k) => {
  return nums.splice(-k).concat(nums);
};

// in-place
const rotate3 = (nums, k) => {
  let i = 0;

  while (i++ < k) {
    nums.unshift(nums.pop());
  }
};

// in-place
const rotate4 = (nums, k) => {
  const rotate = (array, from, to) => {
    let temp;

    while (from <= to) {
      temp = array[to];
      array[to] = array[from];
      array[from] = temp;
      from += 1;
      to -= 1;
    }
  };

  rotate(nums, 0, nums.length - 1);
  rotate(nums, 0, k - 1);
  rotate(nums, k, nums.length - 1);
};


//////////////// Tests //////////////////////

describe('rotate', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];

  const test = new TestHelper();
  test.expect(array, 3).toEqual([5, 6, 7, 1, 2, 3, 4]);
  test.expect(array, 5).toEqual([3, 4, 5, 6, 7, 1, 2]);

  test.execute(rotate1, rotate2);
  test.executeInPlace(rotate3, rotate4);
});





