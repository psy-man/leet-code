import { TestHelper } from '../../utils/test-case';


const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const l1 = num1.length;
  const l2 = num2.length;

  const product = [];
  product[l1 + l2 - 1] = 0;
  delete product[l1 + l2 - 1];
  product.fill(0);

  for (let i = l1 - 1; i >= 0; i -= 1) {
    for (let j = l2 - 1; j >= 0; j -= 1) {
      product[i + j + 1] += num1[i] * num2[j];
    }
  }

  let rest = 0;
  let value = 0;
  for (let i = l1 + l2 - 1; i >= 0; i -= 1) {
    const sum = product[i] + rest;
    value = sum % 10;
    rest = ~~(sum / 10);
    product[i] = value;
  }

  let result = product.join('');

  while (result.length > 0 && result[0] === '0') {
    result = result.slice(1);
  }

  return result.length > 0 ? result : '0';
};


// trivial solution
const multiply1 = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  const add = (acc, value, start) => {
    if (acc.length === 0) {
      return value;
    }

    let p1 = acc.length - start - 1;
    let p2 = value.length - 1;

    let res = '';

    let val = 0;
    let rest = 0;

    while (acc[p1] || value[p2]) {
      const sum = (+acc[p1] || 0) + (+value[p2] || 0) + rest;

      val = sum % 10;
      rest = Math.floor(sum / 10);
      res = val + res;

      p1 -= 1;
      p2 -= 1;
    }

    if (rest > 0) {
      res = 1 + res;
    }

    return res + acc.slice(-start);
  };

  let result = '';

  let value = 0;
  let residue = 0;

  for (let i = num1.length - 1; i >= 0; i -= 1) {
    const n1 = num1[i];

    let stepResult = '';

    for (let j = num2.length - 1; j >= 0; j -= 1) {
      const n2 = num2[j];

      const mul = n1 * n2 + residue;

      value = mul % 10;
      residue = Math.floor(mul / 10);

      stepResult = value + stepResult;
    }

    if (residue > 0) {
      stepResult = residue + stepResult;
      residue = 0;
    }

    result = add(result, stepResult, num1.length - i - 1);
  }

  return result;
};


//////////////// Tests //////////////////////

describe('multiply', () => {
  const test = new TestHelper();

  test.expect('12345678', '12345678').toEqual('152415765279684');
  test.expect('9007199254740991012345678912345678909876543212', '987654321987654321900719925474099144099934993445')
    .toEqual('8895999272948918781331257474082830920950877664040367640086607552622561533920797619650479245340');

  test.execute(multiply, multiply1);
});
