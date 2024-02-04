
function userObj(num,...rest){
    return num + "," + rest
}
let x = userObj(12,34,"ahmed")
console.log(x)

const myid = Symbol("id")
const obj1User = {
    [myid]:1234,
    username:"AHmed"
}
function myobj(myobj,...rest){
    return myobj.username + "," + rest
}
console.log(myobj(obj1User,obj1User[myid]))

function myobj3(obj){
    return obj
}

const onjdetail = myobj3({
[myid] : 12370, 
username:"Joosub",
 id:123   
})
console.log(onjdetail)
console.log();
console.log(`IIFE: Immediate Invoking function epression`)
function sum(a, b){
    return a + b;
}
//console.log(sum(1,3))

( function sum2(c,d) {
    console.log(c+d)
} ) ( 1,3 );

( (name) => {
    console.log(`${name}`);
}) ('Jos')
