var c =300
//{} it is scope
let a=50

if(true){
    let a= 10
    const b = 20
   var c= 30// it will only use inside scope
console.log(a)
}
console.log(c)//print should be 300 as it is a global variable but it is because of var 
console.log(a)