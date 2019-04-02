/**
 * 解构赋值（destructuring assignment）
 * */

let [x, y, ...other] = [1, 2, 3, 4, 5]
console.log(x, y, other)  //1 2 [ 3, 4, 5 ]


let {name, age} = {name: 'abc', age: 20}
console.log(name, age)  //abc 20

function func() {
    return [10,20]
}
let [num1,num2] = func();
console.log(num1,num2)  //10 20


//函数参数名指定
function func2({x=10,y=20}) {
    return x+y
}
console.log(func2({}))  //30
console.log(func2({x:11}))  //31