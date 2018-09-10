// const rotatedDigits = (N) => {
//   const nums = new Map([[0, 0], [1, 1], [2, 5], [3, null], [4, null], [5, 2], [6, 9], [7, null], [8, 8], [9, 6],]);
//   let result = 0;
//
//   for (let i = 0; i <= N; i += 1) {
//     let str = '';
//     let valid = true;
//
//     if (/[347]/g.test(i.toString())) {
//       continue;
//     }
//
//     for (const n of i.toString()) {
//       str += nums.get(+n);
//     }
//
//     if (valid && +str != i) {
//       result += 1;
//     }
//   }
//
//   return result;
// };
//
// console.log(rotatedDigits(10));


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


console.log(judgeSquareSum(3));
console.log(judgeSquareSum(5));
console.log(judgeSquareSum(44));
console.log(judgeSquareSum(36));

console.log(judgeSquareSum(4));
console.log(judgeSquareSum(9999999999));
