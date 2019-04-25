/**
 * 枚举类型
 *  枚举类型是每种编程语言中都支持的变量类型，它可以增加程序代码的可读性
 *
 *  定义方法
 *      enum name {name1,name2,name3,...}
 * */
var Sex;
(function (Sex) {
    Sex[Sex["MAN"] = 0] = "MAN";
    Sex[Sex["WOMAN"] = 1] = "WOMAN";
    Sex[Sex["UNKNOW"] = 2] = "UNKNOW";
})(Sex || (Sex = {}));
var member_sex = Sex.MAN;
console.log(member_sex); //0
console.log(Sex[member_sex]); //MAN
switch (+member_sex) {
    case Sex.MAN:
        console.log('男');
        break;
    case Sex.WOMAN:
        console.log('女');
        break;
    case Sex.UNKNOW:
        console.log('未知');
        break;
}
console.log(checkSex(member_sex)); //男
function checkSex(sex) {
    var result = '';
    switch (sex) {
        case Sex.MAN:
            console.log('男');
            break;
        case Sex.WOMAN:
            console.log('女');
            break;
        case Sex.UNKNOW:
            console.log('未知');
            break;
    }
    return result;
}
//# sourceMappingURL=enum.js.map