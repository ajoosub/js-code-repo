//singleton
//const xyz = new Object();
//console.log(typeof xyz);

const userInfo = {
    name: "ahmed",
    group: {
        student: {
            stuname: ["ahmed","firdose"]
        }
    }
} 
//console.log(Object.values(userInfo.group.student.stuname))
//console.log(Object.values(userInfo));
const obj1 =  {1:"a"}
const obj2 = {2:"b"}
const obj3 = {3:"c"}

//const obj4 = Object.assign({},obj1,obj2,obj3)
//console.log(obj4)
//const nobj4 = [...Array.of(obj1,obj2,obj3)]
const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4)  

console.log(Object.entries(userInfo))
if(userInfo.hasOwnProperty("names")){
    console.log(true)
}
else
console.log(false)

//const bookid = Symbol("id") 
const arrObject = [
    {
        bookid: 1,
        email: "1@yahoo.com"
    },
    {
        bookid:2,
        email:"2@yahoo.com"
    },
    {
        bookid:3,
        email:"3@yahoo.com"
    }
]

console.log(arrObject[1].bookid)

const arrobj = {...arrObject} 
console.log(`${Object.keys(arrobj)}`)




