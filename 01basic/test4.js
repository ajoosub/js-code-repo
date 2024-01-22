//primitive data type
//number, string, boolean, undefined,  null

//non primitive data
//array, object, function


//Primitive data: copy value changed on stack not original value Under stack
let myname = "Ahmed";
let firstname  = myname;
console.log(myname,firstname)
firstname = "Joosub"
console.log(myname,firstname)

//Non primitive data: reference value changed so do original value as well under Heep
console.log("Copy by refernce")
let userInfo = {
    name : "awesome",
    id: 121
}
let newuser = userInfo
console.log("name: ",userInfo.name,"id: ",userInfo.id)
console.log(userInfo)
newuser.id=323
console.log("aftet name: ",userInfo.name,"after id:",userInfo.id)
console.log(newuser)









