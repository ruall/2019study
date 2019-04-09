/**
 * 箭头函数
 *  定义：
 *      (param1:type,param2:type,...):return_type=>{函数内容}
 * */

function add(x:number,y:number):number {
    return x+y
}
console.log(add(1,2))   // 3


let fun_add1 = (x:number,y:number):number=>{
    return x+y
}
console.log(fun_add1(1,2))  // 3