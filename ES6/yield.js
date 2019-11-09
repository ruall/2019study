/**
 * 建立一个简单的迭代类(yield)
 * */

class MyList {
  constructor(list) {
    this.list = list
    this[Symbol.iterator] = function* () {
      let current = 0
      let that = this
      while (current < that.list.length) {
        yield that.list[current++]
      }
    }
  }
}

let myList = new MyList([100, 200, 300, 400, 500])
for (let tmp of myList) {
  console.log(tmp)
}