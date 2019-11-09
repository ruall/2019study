/**
 * 定义参数个数不定的函数
 *  定义符号：...
 *
 * */

let fun_arr1 = (vals: number[]): number => {
  let result: number = 0;
  for (let val of vals) {
    result += val
  }
  return result
}
console.log(fun_arr1([1, 2, 3])) // 6

let fun_arr2 = (...vals: number[]): number => {
  let result: number = 0;
  for (let val of vals) {
    result += val
  }
  return result
}
console.log(fun_arr2(1, 2, 3)) // 6