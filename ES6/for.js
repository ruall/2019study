/**
 * 可迭代的对象 迭代方法
 * */

let list = [10, 20, 30]

let str = '安迪啊'

let mymap = new Map()
mymap.set('JS', 'JavaScript')
mymap.set('PL', 'Perl')
mymap.set('PY', 'Python')

for (let val of list) {
  console.log(val)
}

for (let mystr of str){
  console.log(mystr)
}

for (let [key,val] of mymap){
  console.log(key,val)
}

let it = mymap.values();
let tmp
while (tmp = it.next()){
  if(tmp.done) break
  console.log(tmp.value,tmp.done)
}
