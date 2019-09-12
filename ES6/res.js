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
