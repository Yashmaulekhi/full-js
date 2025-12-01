function say(){
    console.log("Y")
    console.log("a")
    console.log("s")
    console.log("h")
    
}
say()


/*function addNumbers(number1,number2){
    console.log(number1+number2)
}*/
addNumbers(1,3)//you have to give value of number 1 and 2 to get answer otherwise error came if give string concatination{pass null string array check}with one number
function addNumbers(number1,number2){
    
    return number1 +number2
}
   const result= addNumbers(1,3)
  
    console.log("Result:",result)
    function loginUserNmame(username="sam"){
        if(!username){
            console.log("enter a username")
            return
        }
        return `${username} just logged in`
    }
    console.log( loginUserNmame("Yash"))
    function Calculatecarprice(val1,val2,...num1){
        return num1
    }
    console.log( Calculatecarprice(200,400,500,9900))
    
    const myNewArray= [200,400,600,300] 
    function returnSecondValue(getArray){
    
        return getArray[1]
    }
    console.log(returnSecondValue(myNewArray))
 const user= {
    username:"Hitesh",
    price:199
 }
 
    
 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
 }
 handleObject(user)