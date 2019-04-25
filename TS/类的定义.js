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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Member = /** @class */ (function () {
    function Member(name, age) {
        this.name = name;
        this.age = age;
    }
    Member.prototype.sayHi = function () {
        console.log("Hi " + this.age + " \u5C81\u7684 " + this.name);
    };
    return Member;
}());
var member = new Member('小马', 20);
member.sayHi(); //Hi 20 岁的 小马
/**
 *  类的访问修饰符
 *      public:共有访问
 *      protected:本类和子类访问
 *      private:本类访问
 * */
var Database = /** @class */ (function () {
    function Database(dbname, dbpwd) {
        this.dbname = dbname;
        this.dbpwd = dbpwd;
    }
    Object.defineProperty(Database.prototype, "password", {
        get: function () {
            return this.dbpwd;
        },
        set: function (val) {
            this.dbpwd = val;
        },
        enumerable: true,
        configurable: true
    });
    //外部调用
    Database.prototype.showDB = function () {
        console.log("\u6570\u636E\u5E93" + this.dbname);
    };
    Database.prototype.showDis = function () {
        this.disconnect();
    };
    //本类和子类调用
    Database.prototype.connect = function () {
        console.log(this.dbname + "\u8FDE\u63A5\u4E2D...");
    };
    //本类访问
    Database.prototype.disconnect = function () {
        console.log(this.dbname + "\u8FDE\u63A5\u65AD\u5F00");
    };
    return Database;
}());
var oracle = new Database('Oracle', 111);
oracle.showDB(); //数据库Oracle
oracle.showDis(); //Oracle连接断开
console.log(oracle.password); //111
oracle.password = 333;
console.log(oracle.password); //333
var PostgreSql = /** @class */ (function (_super) {
    __extends(PostgreSql, _super);
    function PostgreSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostgreSql.prototype.doIt = function () {
        _super.prototype.connect.call(this);
    };
    return PostgreSql;
}(Database));
var post = new PostgreSql('mySql', 222);
post.showDB();
post.doIt(); //mySql连接中...
post.showDis();
Database.admin = true;
console.log(Database.admin);
//# sourceMappingURL=类的定义.js.map