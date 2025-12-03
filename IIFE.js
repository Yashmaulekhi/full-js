(function chai(){
    console.log('DB CONNECTED')
})();                   //semicolon imp as for end
(() => {
    console.log('DB CONNECTED TWO ${name')
})('hitesh');                   //semicolon imp as for end


///in call stack lifo made as if we call a function inside function the inside function  first come out lifo
// 1.global execution- this -->{}
// 2.memory phase -
// val1- undefined
// val2- undefined
// addnum- defination
// result1-undefined
// result2-undefined
// 3.Execution phase

// val-10
// va2-5
// add num---->box[new variable environment+execution thread]
// now 2 and 3 repeat 
// 2.memory phase-
// val1=undefined
// val2=undefined
// total=undefined
// 3.Execution Combat
// num1=10
// num2=5
// total=15
// now total return global execution
// after this box[new variable environment+execution thread] deleted
