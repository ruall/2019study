/**
 * 联合类型
 *  定义：
 *      联合类型是指可以包含多种数据类型的变量类型，在实际项目中不常用也不推荐使用
 *  声明：
 *      let data:type1|type2|type3|...
 * */

let data: string | number

data = 'abc'
console.log(data)   //abc

data = 123
console.log(data)   //123

//编译报错
// data = true
// console.log(data)