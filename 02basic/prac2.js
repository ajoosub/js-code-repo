const obj = {
    name: "AHmed",
    id: 123,
    follow: true
}

console.log(typeof obj)
console.log(typeof obj["name"])
console.log(obj)
let element
for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
        element = obj[key];
        console.log(element)
    }
    }
const newarr = new Array()
console.log(Array.isArray(obj))
console.log(Array.from(obj["name"]))
let score1=30;
let score2=40;
let score=50;
let myarr = (Array.of(score1,score2,score))
console.log(myarr)
const newarr2 = [...Array.of(obj)]
const newarr3 = (newarr2.flat(Infinity))
console.log(newarr3)






