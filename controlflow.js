if(2!==3){
    console.log("sucess")
}
if(2==3){
    console.log("yes")
}
if(2===3){
    console.log("no")
}

if(2!==3){
    console.log("correct")
}
if(2!==3){
    console.log("right")
}
//if 2//3 use math function
const a=30
if(a>=0 &&a<=20 ){
     console.log("C")
}
else if(a>=20 &&a<=50 ){
     console.log("B")
}
else{
     console.log("A")
}
// -----------------switch---------------------
switch(a){
    case (a>=0 &&a<=20 ):
    console.log("C")
    break;
    case (a>=0 &&a<=20 ):
    console.log("B")
    break;
    default :
    break;
}
// const userEmail =[]
// if(userEmail){
//     console.log("got")
// }
// else{
//     console.log("not got")
// }
// const userEmail =""//why false in string
// if(userEmail){
//     console.log("got")
// }
// else{
//     console.log("not got")
// }


//+++++++++++++falsy values++++++++++++++++++++++
//false,0,-0,BigInt ke andar 0n,"",null,undefined,NAN
//+++++++++++++Truthy values++++++++++++++++++++++
//'false',"0"," ",[],{},function(){}


//nullish Coalscing OPerator (??): null undefined
let val1;
//val1 = 5??10
val1 = null??10                                 //avoid null

console.log(val1);
