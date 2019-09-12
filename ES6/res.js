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
str.replace(re,($0,$1) => {
    if(num < $0.length){
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