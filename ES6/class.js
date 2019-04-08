/**
 * 类定义 class
 * */
class Player{

    //构造器
    constructor(name,sex){
        this.name = name
        this.sex = sex
    }
    show(){
        console.log(`${this.name}的性别是${this.sex}`)
    }
    static info(){
        console.log('这是一个静态方法')
    }
}
Player.info();
let player = new Player('张三','男');
player.show();
console.log(player.name,player.sex)