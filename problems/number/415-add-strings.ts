import { TestHelper } from '../../utils/test-case';


const addStrings = function(num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  let result = '';
  let rest = 0;

  while (num1[p1] || num2[p2]) {
    const sum = (+num1[p1--] || 0) + (+num2[p2--] || 0) + rest;

    result = (sum % 10) + result;
    rest = ~~(sum / 10);
  }

  if (rest) {
    result = rest + result;
  }

  return result;
};


//////////////// Tests //////////////////////

describe('addStrings', () => {
  const test = new TestHelper();

  test.expect('9', '91').toEqual('100');
  test.expect('91', '9').toEqual('100');
  test.expect('1234567890', '9876543210').toEqual('11111111100');
  test.expect('1234567890123456789012345678901234567890', '98765432109876543210987654321')
    .toEqual('1234567890222222221122222222112222222211');

  test.execute(addStrings);
});
