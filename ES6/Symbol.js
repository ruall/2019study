/**
 * Symbol
 * 作为常量
 * 作为属性
 * 半隐藏属性
 * */

const Java = Symbol()
const Ruby = Symbol()
const Perl = Symbol()
const Php = Symbol()
const VB = Symbol()

var lang = Java

if(lang === Java){
  console.log('Java啊')
}
if(lang === Ruby){
  console.log('Ruby啊')
}


let s1 = Symbol('myS1')
let s2 = Symbol('myS2')
var obj = {}
obj[s1] = 'hello'
obj[s2] = 'world'
console.log(obj)
console.log(obj[s1])
console.log(obj[s2])



const MYKEY = Symbol()
class User {
  constructor(key,name,age){
    this[MYKEY] = key
    this.name = name
    this.age = age
  }
  checkKEY(key){
    return this[MYKEY] === key
  }
}

let user = new User(1,'张三',23)
console.log(user.name,user.age,user[MYKEY]) //张三 23 1
console.log(user.checkKEY(1)) // true
console.log(user.checkKEY(2)) //false
console.log(Object.keys(user)) // [ 'name', 'age' ]
console.log(JSON.stringify(user)) //{"name":"张三","age":23}