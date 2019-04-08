/**
 * 可迭代对象
 * */

class Player {
    constructor(list) {
        this.list = list
    }
    [Symbol.iterator](){
        let current = 0
        let that = this
        return{
            next(){
                return current < that.list.length ? {value:that.list[current++],done:false} : {done:true}
            }
        }
    }
}

let player = new Player(['aaa','bbb','ccc'])
for (let tmp of player){
    console.log(tmp)
}