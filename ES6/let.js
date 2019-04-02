/**
 * let 声明变量
 * */
//ES5写法
if(true){
    var i = 1;
}
console.log(i); //输出1

//ES6写法
if(true){
    let l = 1;
}
console.log(l) //控制台输出l未定义



// 重复定义报错
// var k =0;
// switch (k) {
//     case 0:
//         let val = 'a'
//         break
//     case 1:
//         let val = 'b'
//         break
// }
