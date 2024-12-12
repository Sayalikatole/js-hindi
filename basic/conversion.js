let score = 55
//*********************operations***************/

let value = 4
let  negvalue = -value
console.log(negvalue);

let str1 = "hello"
let str2 = "worls"
let str3 =  str1 + str2
console.log(str3);
console.log("1" + 2)
console.log(1 + "4");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log((3+4) * 5 % 3);

////meomery stack(primitive-copy is there ),heap(non-primitive reference)

let myName = "syalijhdj"
let anotherName = myName
anotherName="my code chai"
console.log(anotherName);
console.log(myName)

let userOne = {
    email:"user.gooogle.com",
    upi:"user@ybbl",
    name:"sayali",
}
// let userTwo = {
//     email:"user.gooogle.com",
//     upi:"useegbcdb@ybl",
//     name:"saybcdgyn",
// }

let userTwo = userOne
userTwo.email="sadahd@123.com"

console.log(userOne.email);
console.log(userOne);
console.log(userTwo.email);

/* ********* string *************/
const name = "sayali"
const repoCount = 30

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String ('sayali-tp-now-busy')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(4))
// console.log(gameName.toUpperCase());
// const newString = gameName.substring(0,4)
// console.log(newString) 

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString)

const newString = "  sayali    " 
console.log(newString.trim())
console.log(newString)
console.log(gameName.split('-'))



