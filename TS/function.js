/**
 * 函数的使用
 *  定义：
 *      function fname(param1:type,param2:type,...):return_type{
 *          函数内容
 *      }
 * */
function add(x, y) {
    return x + y;
}
console.log(add(1, 2)); //3
function multiply(x, y) {
    return x * y;
}
console.log(multiply(1, 2)); //2
var fun_add = add;
var fun_mul = multiply;
console.log(fun_add(1, 2)); //3
console.log(fun_mul(1, 2)); //2
//# sourceMappingURL=function.js.map