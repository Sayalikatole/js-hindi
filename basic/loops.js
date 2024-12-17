//for of
//[" " , " " , " "]
//[{},{},{}]

// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(arr)
//     console.log(num)
// }
const greeting = "Good Morning"
for (const greet of greeting) {
    //console.log(greet);
    //console.log(greeting)
    //console.log(`Each char is ${greet}`)
}
//Maps
const map = new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATE")
map.set('FR',"FRANCE")
//console.log(map)
//  for (const key of map){
//     console.log(key);
//  }
//  for (const [key,value] of map){
//     console.log(key, ':-', value);
//  }
//////////////////////////////FOR IN LOOP FOR OBJECT
const myObject ={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    java:"Java"
}
// for (const key of myObject) {   //for object forof not work
//     console.log(key)
// }
// for (const key in myObject) { //forin loop for object
//     //console.log(key);
//     //console.log(myObject[key])
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }
// const programming = ["js","py","java","cpp","rb"] //OUTPUT IS KEY OF ARRAY
// for (const key in programming) {
//     //console.log(key)
//     console.log(programming[key])
// }
///////////////// FOR EACH LOOP
// const  coding =["js","rb","py","cpp","java"]
// //console.log(coding) 
// //coding.forEach(function greet() {}) //DUE TO CALLBACK FN THERE IS NO NAME I.E GREET
// coding.forEach(function (val) {
//     console.log(val)
// })
const arr =[
    {
        languageName:"Javascipt",
        languageFile:"js"
    },
    {
        languageName:"Java",
        languageFile:"java"
    },
    {
        languageName:"CPP",
        languageFile:"c++"
    }
]
arr.forEach((item)=>{
    console.log(item.languageName)
})