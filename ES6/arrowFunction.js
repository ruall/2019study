/**
 *  箭头函数 （Arrow Function）
 **/

let list = [10, 20, 30]

//ES5写法
// let newList = list.map(function (value, index) {
//     return value * value
// })


//ES6写法
let newList = list.map((value, index) => {
    return value * value
})
console.log(newList)