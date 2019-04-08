/**
 * function* 迭代器生成
 * yield 迭代返回
 * */

function* myGenerator() {
    yield '啊'
    yield '哦'
    yield '额'
    yield '嗷'
    yield '哇'
}

for (let tmp of myGenerator()) {
    console.log(tmp)
}

function* countdown(begin) {
    while (begin > 0){
        yield begin--
    }
}
for (let val of countdown(10)){
    console.log(val)
}