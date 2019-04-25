/**
 * 定义参数个数不定的函数
 *  定义符号：...
 *
 * */
var fun_arr1 = function (vals) {
    var result = 0;
    for (var _i = 0, vals_1 = vals; _i < vals_1.length; _i++) {
        var val = vals_1[_i];
        result += val;
    }
    return result;
};
console.log(fun_arr1([1, 2, 3])); // 6
var fun_arr2 = function () {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, vals_2 = vals; _a < vals_2.length; _a++) {
        var val = vals_2[_a];
        result += val;
    }
    return result;
};
console.log(fun_arr2(1, 2, 3)); // 6
//# sourceMappingURL=参数个数不定的函数.js.map