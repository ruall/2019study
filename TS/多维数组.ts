/**
 * 多维数组的定义
 *   一维数组的定义
 *      let name:type[] = initial
 *
 *   多维数组的定义
 *      let name:type[][] =  [[],[],[],...]
 *
 * 多维数组的使用
 * */


let arrs:number[][] = [
    [1,2,3,4,5],
    [10,20,30,40,50],
    [100,200,300,400,500]
]
console.log(arrs)   //[ [ 1, 2, 3, 4, 5 ],[ 10, 20, 30, 40, 50 ],[ 100, 200, 300, 400, 500 ] ]
console.log(arrs[0])    //[ 1, 2, 3, 4, 5 ]
console.log(arrs[1])    //[ 10, 20, 30, 40, 50 ]
console.log(arrs[2])    //[ 100, 200, 300, 400, 500 ]
console.log(arrs[0][1]) //2
console.log(arrs[1][1]) //20
console.log(arrs[2][1]) //200