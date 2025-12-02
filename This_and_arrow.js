const user = {
    username: "hitesh",
    price: 999,
    welcomemessage: function () {
        console.log(`${this.username} welcome to website`)//inside an object to access its value this used
        console.log(this)
    }

}
//user.welcomemessage()
//user.username = "sam"//now the current value sam
//user.welcomemessage()
/*console.log(this)
function chai(){
    let username = "hitesh"
    console.log(this.username)-------- undefine as not use in object
    

}
chai()*/

/*const addtwo=(num1,num2)=>{
    return num1+num2
}*/
//const addtwo=(num1,num2)=> num1+num2//+++++also a case to run it withot return
//const addtwo=(num1,num2)=> (num1+num2)//+++++also a second case to run it withot return

const addtwo = (num1, num2) => ({ username: "hitesh" })//+++++if rerurning a object





console.log(addtwo(3, 4))


