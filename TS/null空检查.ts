/**
 *  空检查用于代码编译时对程序内的变量做null空值检查，来避免业务级别的错误
 *  null赋值代码
 *
 *  tsconfig.js的用法
 *
 *      "strictNullChecks": true
 **/


let mydata1:string = undefined
let mydata2:string = null
let mydata3:string = ''
mydata3 = null