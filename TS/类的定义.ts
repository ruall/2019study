/**
 * 类的定义
 *  定义：
 *      class classname {
 *          property_name1:type
 *          property_name2:type
 *          ...
 *
 *          //构造函数
 *          constructor(param1:type,param2:type,...){
 *              //构造函数内容
 *          }
 *
 *          //类方法
 *          method1(param1:type,param2:type,...){
 *              //函数内容
 *          }
 *          //method2,method3,...
 *      }
 * */


class Member {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log(`Hi ${this.age} 岁的 ${this.name}`)
    }
}

let member = new Member('小马', 20);
member.sayHi() //Hi 20 岁的 小马


/**
 *  类的访问修饰符
 *      public:共有访问
 *      protected:本类和子类访问
 *      private:本类访问
 * */


class Database {
    dbname: string
    private dbpwd:number
    public static admin:boolean

    constructor(dbname: string,dbpwd:number) {
        this.dbname = dbname
        this.dbpwd = dbpwd
    }

    get password():number{
        return this.dbpwd
    }

    set password(val:number){
        this.dbpwd = val
    }

    //外部调用
    public showDB(){
        console.log(`数据库${this.dbname}`)
    }

    public showDis(){
        this.disconnect()
    }

    //本类和子类调用
    protected connect(){
        console.log(`${this.dbname}连接中...`)
    }

    //本类访问
    private disconnect(){
        console.log(`${this.dbname}连接断开`)
    }
}
let oracle = new Database('Oracle',111)
oracle.showDB() //数据库Oracle
oracle.showDis() //Oracle连接断开
console.log(oracle.password) //111
oracle.password = 333
console.log(oracle.password) //333

class PostgreSql extends Database{
    public doIt(){
        super.connect()
    }
}

let post = new PostgreSql('mySql',222)
post.showDB()
post.doIt() //mySql连接中...
post.showDis()

Database.admin = true
console.log(Database.admin)