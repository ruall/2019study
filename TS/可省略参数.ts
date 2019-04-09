/**
 * 可省略参数
 * 定义符号：？
 * */

function sayHi(name?:string) {
    if(name === undefined){
        return 'Hi A'
    }else{
        return `Hi ${name}`
    }
}
console.log(sayHi('B')) //Hi B
console.log(sayHi()) //Hi A

//定义函数的默认值
function sayHello(name:string = 'C') {
    return `Hello ${name}`
}
console.log(sayHello()) //Hello C