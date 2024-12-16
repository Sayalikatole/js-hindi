// const balance = 100
// //if(balance>300) console.log("test"),console.log("test2")// not reccomded
// if(balance < 500){
// console.log("less than");
// }else if(balance < 750){
//     console.log("less tgan 30")
// }else{
//     console.log("right")
// }
// const userLogin = true;
// const upiPayment = false;
// if(userLogin && upiPayment){
//     console.log("Allow to buy")
// }else{
//     console.log("Try after payment")
// }
// 
const userEmail = ""
if(userEmail){
    console.log("Got user");
}else{
    console.log("Don't have user");
}

//Falsy Values
//false,0,-0,null,undefined,NaN,"",BigInt

//True values
//true,[],"0",'false'," ",[],{},function(){}

//Nullish coalescing operatore (??):null,undefined
let val1;
val1= 5 ?? 10
console.log(val1)