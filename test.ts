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
