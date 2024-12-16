let a =100;
var b =70;
const c = 8;

if(true){
    let a =10;
    var b =7;
    const c = 8;
    // console.log(a)
    // console.log(b)

}
// console.log(a)
// console.log(b)
// console.log(c)
// function one(){
//     const name = "sayali"
//     const website="facebook"
//     function two(){
//         const website  = "youtube";
//         let name = "yash"
//         console.log(name)
//         console.log(website)
//     }
//     console.log(name)
//     console.log(website)
//     two()
// }
// one()
//*****************************intresting ********************** */
// console.log(addone(8))
// function addone(num){
//     return num+1
// }
// //console.log(addtwo(8))

// let addtwo = function(num){
//     return num+2
// }
// addone()

// ******* Arrow functions  with this keyword
const user ={
    username:"syali",
    price:123,

    welcomeMessege:function(){
console.log(`${this.username}, Welcome to website`)
//console.log(this)
    }
}
// user.welcomeMessege()
// user.username="yassh";
// user.welcomeMessege()
//console.log(this)
// function add(){
// console.log(this)
// }
// add()
//  const chai=() => {
//     let username = "sayali"
//     console.log(this)
//     }
//     chai()
// const addTwo = (num1,num2) =>{  //Explicit function
//     return num1+num2
// }
// console.log(addTwo(2,5))
//const addTwo = (num1,num2) => (num1+num2) //Impicit function
// for object
// const addTwo = (num1,num2) => ({username:"sayali"})
// console.log(addTwo(2,5))

(function sub(){
    console.log(`DB CONNECTED`);
})();