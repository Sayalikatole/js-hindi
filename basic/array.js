//array
const myArr = [1,2,34,5,67,7]
console.log(myArr[1])
//Array Methdos
// myArr.push(4)
// myArr.push(7,8)
// myArr.pop()
// myArr.unshift(9)
// console.log(myArr.includes(0));
// const newArr = myArr.join()
// console.log(myArr);
//console.log(typeof newArr);

/// slice,splice methods
console.log("A",myArr)
const myn1 = myArr.slice(1,3) //for slice 
console.log(myn1)
console.log("B",myArr)
const myn2 = myArr.splice(1,3) //for splice chnge the orignal array
console.log("c",myArr)
console.log(myn2)

console.log(Array.isArray)

////////OBJECTS IN JS
const tinderUser = {}
tinderUser.id = "123abc",
tinderUser.name="sayali"
tinderUser.isLoggin = false
//console.log(tinderUser)
const regukarUser={
    email:"sayali@1223",
    name:{
       fullname: "saualu",
       lastname:"hkyu",
       id:123,
    } 
}
//console.log(regukarUser.name)
const user =[{
    id:1,
    name:"sayali",
    marks:"245",   
},
{
    id:2,
    name:"sayagrgl",
    marks:"265",   
},
{
    id:3,
    name:"safgri",
    marks:"245",   
}] 
user[1].name
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
//hasOwnProperty