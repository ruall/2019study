/**
 * 可省略参数
 * 定义符号：？
 * */
function sayHi(name) {
    if (name === undefined) {
        return 'Hi A';
    }
    else {
        return "Hi " + name;
    }
}
console.log(sayHi('B')); //Hi B
console.log(sayHi()); //Hi A
//定义函数的默认值
function sayHello(name) {
    if (name === void 0) { name = 'C'; }
    return "Hello " + name;
}
console.log(sayHello()); //Hello C
//# sourceMappingURL=可省略参数.js.map