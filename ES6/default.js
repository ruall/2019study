/**
 * 函数的默认值
 * */

function func1(name = '111') {
  console.log(name)
}

func1();    //111
func1('222')    //222

function required() {
  throw new Error('参数未指定')
}
function func2(name=required()) {
  console.log(name)
}
// func2() //参数未指定
func2('333')    //333


function func3(...args) {
  let result = 0;
  args.forEach(val=>{
    result += val
  })
  console.log(result)
}
func3(1,2) //3
func3(1,2,3,4,5) //15