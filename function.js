function say() {
    console.log("Y")
    console.log("a")
    console.log("s")
    console.log("h")

}
say()


/*function addNumbers(number1,number2){
    console.log(number1+number2)
}*/
addNumbers(1, 3)//you have to give value of number 1 and 2 to get answer otherwise error came if give string concatination{pass null string array check}with one number
function addNumbers(number1, number2) {

    return number1 + number2
}
const result = addNumbers(1, 3)

console.log("Result:", result)
function loginUserNmame(username = "sam") {
    if (!username) {
        console.log("enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserNmame("Yash"))
function Calculatecarprice(val1, val2, ...num1) {// ...=> three dots are rest operator
    return num1
}
console.log(Calculatecarprice(200, 400, 500, 9900))

const myNewArray = [200, 400, 600, 300]
function returnSecondValue(getArray) {

    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
const user = {
    username: "Hitesh",
    price: 199
}


function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
//-----------Function inside function--------------------------------------------
function one() {
    const username = "hitesh"
    function two() {
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website); as website cant define out of scope

    two()
}
one()
if (true) {
    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website); as outside scope website is not define
}
//console.log(username);as outside scope username is notdefine
//+++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++++++++
/*function addone(num){
    return num+1
}
addone(5)
const addtwo=function(num){////differntway of writing function
    return num+1
}
addtwo(5)*/
addone(5)
function addone(num) {
    return num + 1
}
//addtwo(5)   *******note error came in this syntax when you put function call at start
const addtwo = function (num){
    return num + 1
}