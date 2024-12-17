// const coding = ["js","rb","java","pyt","cpp"]
// const values = coding.forEach((item)=>{
//     //console.log(item); //value is undefined
//     return item
// })
// console.log(values) //without return undefined 

// const myNum = [1,2,3,45,5,6,7,7,8,9,10]
// let newNum = myNum.filter((num)=> num <= 4)
// console.log(newNum)

const myNum = [1,2,3,4,5,6,7,8,9,10]
//let newNum = myNum.map((num)=> {return num + 10})
let newNum = myNum       //CHAINING IN JS
.map((num)=> num * 10 )
.map((num)=> num + 10)
.filter((num)=> num >= 50)
//console.log(newNum)

//console.log(newNum)

// let newNumm = myNum.forEach((num)=>{
//     console.log(num+ 10)
// })
 
let arrY = [1,2,3,4]
// const myTotal = arrY.reduce(function(acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc * currval
// },2) 
const myTotal = arrY.reduce((acc,currval)=> acc + currval , 0)
//console.log(myTotal)
