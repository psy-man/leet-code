import { TestHelper } from '../../utils/test-case';


const judgeSquareSum = (c) => {
  let start = 0;
  let end = ~~Math.sqrt(c);

  while (start <= end) {
    const sum = start * start + end * end;

    if (sum === c) {
      return true;
    } else if (sum > c) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return false;
};


//////////////// Tests //////////////////////

describe('judgeSquareSum', () => {
  const test = new TestHelper();

  test.expect(3).toEqual(false);
  test.expect(4).toEqual(true);
  test.expect(5).toEqual(true);
  test.expect(9).toEqual(true);
  test.expect(9999999999).toEqual(false);

  test.execute(judgeSquareSum);
});
