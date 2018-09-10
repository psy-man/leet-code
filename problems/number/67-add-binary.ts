import { TestHelper } from '../../utils/test-case';


const addBinary = function (a, b) {
  let result = '';

  let aP = a.length - 1;
  let bP = b.length - 1;

  let needInc = false;

  while (a[aP] || b[bP]) {
    const sum = (a[aP] || 0) + (b[bP] || 0);

    if (sum === '00' || sum === '11') {
      result = (needInc ? '1' : '0') + result;
      needInc = (sum === '11');
    } else {
      result = (needInc ? '0' : '1') + result;
    }

    aP -= 1;
    bP -= 1;
  }

  if (needInc) {
    result = '1' + result;
  }

  return result;
};


//////////////// Tests //////////////////////

describe('addBinary', () => {
  const test = new TestHelper();

  test.expect('11', '1').toEqual('100');
  test.expect('1010', '1011').toEqual('10101');
  test.expect('1111', '1111').toEqual('11110');
  test.expect('011', '110').toEqual('1001');

  test.execute(addBinary);
});
