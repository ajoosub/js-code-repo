//Array Structure

const myarr1 = [0,1,2,3,4,5]
for (const i in myarr1) {
    console.log(myarr1[i])
}
console.log("SLICE")
console.log(myarr1)
console.log(myarr1.slice(1,3))
console.log(myarr1)

console.log("SPlice")
console.log(myarr1)
console.log(myarr1.splice(1,3))
console.log(myarr1)

console.log("UNSHIFT")
console.log(myarr1)
const myarr2 = myarr1
console.log(myarr2.unshift(1,2,3))
console.log(myarr2)
console.log(myarr1)

console.log("SHIFT")
//console.log(myarr1)
console.log(myarr2.shift(10))
console.log(myarr2)
console.log(myarr1)

console.log("JOIN")
console.log(myarr2.join(","))
console.log(typeof(myarr1))

