const mm = {
  f: {
    r: true
  },
  l: {
    r: true
  }
};
const fun = (a, b) => {
  for (i in a) {
    if (a[i].r) {
      if (!b[i]) {
        return false;
      }
    }
  }
  return true;
};
console.log(fun(mm, { f: "张三" }));

/**
 * 判断一个字符串中出现次数最多的字符
 * */

// - 方法一
function findMaxDuplicateChar(str) {
  if (str.length === 1) {
    return str;
  }
  let objStr = {};
  for (let i = 0; i < str.length; i++) {
    if (!objStr[str.charAt(i)]) {
      objStr[str.charAt(i)] = 1;
    } else {
      objStr[str.charAt(i)] += 1;
    }
  }
  let maxChar = "",
    maxNum = 1;
  for (let k in objStr) {
    if (objStr[k] >= maxNum) {
      maxChar = k;
      maxNum = objStr[k];
    }
  }
  return `出现次数最多字符是${maxChar}，出现了${maxNum}`
}

// - 方法二
let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

// 使其按照一定的次序排列
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re, ($0, $1) => {
  if (num < $0.length) {
    num = $0.length;
    char = $1;
  }
});
console.log(`字符最多的是${char}，出现了${num}次`);


// - 方法三
var newStr = "asndjandandjkan";
var obj = {};
for (let i = 0; i < newStr.length; i++) {
  var key = newStr[i];
  typeof obj[key] === "undefined" ? (obj[key] = 1) : obj[key]++;
}
var max = -1;
var max_key = key;
for (let key in obj) {
  if (max < obj[key]) {
    max = obj[key];
    max_key = key;
  }
}
console.log(max_key + "出现次数最多共计" + max + "次");



/**
 * 获取地址栏参数
 */
// - 方法一
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
alert(GetQueryString("id"));


// - 方法二
function parseParam(url) {
  const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  let paramsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach(param => {
    if (/=/.test(param)) { // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

      if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], val);
      } else { // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else { // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  })
  return paramsObj;
}