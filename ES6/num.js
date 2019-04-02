/**
 * 0b 十进制
 * 0o 八进制
 * 0x 十六进制
 * */
console.log(0b10) // 2
console.log(0o10) // 8
console.log(0x10) // 16

console.log(0b11 === 3) //true
console.log(0o10 === 8) //true
console.log(0x10 === 16) //true

let num = 10;
console.log(num.toString(2))    //转换成二进制    1010
console.log(num.toString(8))    //转换成八进制    12
console.log(num.toString(16))   //转换成十六进制   a
console.log(num.toString(5))    //转换成五进制    20