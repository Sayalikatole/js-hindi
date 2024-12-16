// function addNum(num1,num2){
//    console.log(num1 + num2) 

// }
function addNum(num1,num2){
let result = num1+num2 
return result
 }
const result = addNum(3,5)
//console.log("result",result)
function loginUser(username){
    return `${username} just logged in`
}
// console.log(loginUser("sayali"))
//Rest operator convert into array
function calculateCart(val1,val2,val3,...num1){
return num1
}
// console.log(calculateCart(788,200,250,300,390))
const user={
    name:"sayali",
    price:123
}
function handleobj(anyobject){
console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}
handleobj(user)

const array =[20,30,3004,50]
function returnValue(getarray){
    return getarray[2]
}
console.log(returnValue(array))