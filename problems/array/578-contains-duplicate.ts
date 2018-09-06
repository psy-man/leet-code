import { TestHelper } from '../../utils/test-case';


const containsDuplicate1 = (nums) => {
  if (nums.length < 2) {
    return false;
  }

  const acc = new Set();

  for (const n of nums) {
    if (acc.has(n)) {
      return true;
    }

    acc.add(n);
  }

  return false;
};

const containsDuplicate2 = (nums) => {
  if (nums.length < 2) {
    return false;
  }

  return (new Set(nums)).size !== nums.length;
};


//////////////// Tests //////////////////////

describe('containsDuplicate', () => {
  const test = new TestHelper();

  test.expect([1, 2, 3]).toEqual(false);
  test.expect([1, 2, 3, 1]).toEqual(true);
  test.expect([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]).toEqual(true);
  test.expect([237384, 348185, 338816, 825359, 461215, 315112, 170091]).toEqual(false);

  test.execute(containsDuplicate1, containsDuplicate2);
});
