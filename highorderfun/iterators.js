let arr = [1,2,3,5]

for (const key in arr) {
   console.log(key,arr[key]);
}
const mymap = new Map()
mymap.set('In',"India")
mymap.set('pak',"pakistan")
mymap.set('ca',"Canada")
//console.log(mymap);
for (const [key,value] of mymap) {
   //console.log(key,value);
}
console.log("____________________")
const mobileinfo = {
   mobile:"samsung",
   price:123
};
for (const key in mobileinfo) {
   console.log(`${key} => ${mobileinfo[key]}`)
}

console.log("____________________")

const proglang = ["java","python","js"]

//for each high order function: foreach(callback())
proglang.forEach((item,index,proglang) => {
console.log(`Item: ${item}, index: ${index}, proglang: ${proglang}`)
} )

console.log("____________________")

const newMobile =[ {
   model:"sony",
   price:1000,
   color:"gold",
},
{   
   model:"iphone",  
   price: 2000,
   color:"black"
},
{
   model:"google",
   price: 800,
   color:"green"
}
   ]

newMobile.forEach( (item) => {
   console.log(`${item.model}: $${item.price}`)
} )
