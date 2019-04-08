/**
 * setter/getter的定义
 * */

class Player{
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }
    get ages(){
        return this._age
    }
    set ages(val){
        this._age = val
    }
}
let player = new Player('张三','男')
console.log(player) // Player { name: '张三', sex: '男' }
player.ages = 20 //调用set方法 赋值_age 20
console.log(player) // Player { name: '张三', sex: '男', _age: 20 }
console.log(player.ages) // 调用 get方法 返回20