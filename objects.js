//object literals
/*const Jsuser = {
    name: "yash",
    age: 18,           for use make code comment out
    location: "xyz",
    email:"yashmaulekhi63@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Manday","Saturday"]}

console.log(Jsuser.email)
console.log(Jsuser["email"])//if you want to see it's use make full name as key and put //value then use console log and print value error came*/
const mysem = Symbol("key1")
const Jsuser = {
    name: "yash",
    mysem:"mykey1",//if you not use it [] in my sem it  
    age: 18,
    location: "xyz",
    email:"yashmaulekhi63@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]}
    console.log(Jsuser.mysem
        
    )//use [] in object in mysem AS [mysem]:"mykey1" and mysem in console.log(jsuser[mysem])
    const obj1 = {
        1:"a",2:"b"
    }
    const obj2 = {
        3:"a",4:"b"
    }
    const obj4 = {
        5:"a",6:"b"
    }
    
   //const obj3 = Object.assign({},obj1,obj2)//check this is good methiod as botha are same 
   // const obj3 = Object.assign(obj1,obj2)//check 

   //const obj3={obj1,obj2} //this make object variable as key value pair
   //const obj3={..obj1,...obj2} 
  // console.log(obj3)
   //const ysdh = new Object()//singelton
   //const ysdh = {}//non singelton result same
   const tinderuser = {}
   tinderuser.name="samay"
   tinderuser.id="123abc"
   tinderuser.isloggedin=false
   console.log(tinderuser)
   console.log(Object.keys(tinderuser))//in array return
   console.log(Object.values(tinderuser))
   console.log(Object.entries(tinderuser))//make each key pair value as an element of array
