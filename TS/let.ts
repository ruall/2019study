/**
 * 默认变量类型
 *  number - 数值型
 *  string - 字符串
 *  boolean - 布尔类型
 *  symbol - 符号类型，标识唯一对象
 *  any - 任意类型
 *  object - 对象类型（数组、元祖、类、接口、函数等）
 * */

let newName: string = "abc";
console.log(newName);

let age: number = 20
console.log(age)
// age = '阿斯顿' //  编译错误，类型不匹配



/**
 * var 和 let 的区别
 *  限定变量的作用范围
 *  防止变量的重复定义
 **/
if(true){
    var sex:string = '男'
}
console.log(sex)

var names:string = "1"
console.log(names) // 1
var names:string = '2'
console.log(names) // 2

// 下面写法编译报错
// let names:string = "1"
// console.log(names)
// let names:string = '2'
// console.log(names)


const DATA:number[] = [10,20,30,40]
console.log(DATA)   //  [ 10, 20, 30, 40 ]

// DATA = [1,2,3] //编译报错，常量无法改变值
//数组常量的地址不能改变，但是数组常量里面的值可以改变
DATA[0] = 1
DATA[1] = 2
DATA[2] = 3
DATA[3] = 4
console.log(DATA)   //  [ 1, 2, 3, 4 ]

//数组元素增加
DATA[4] = 5
console.log(DATA)   //  [ 1, 2, 3, 4, 5 ]