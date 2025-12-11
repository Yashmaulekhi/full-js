// code = ["c", "c++", "java", "python"]
// const value = code.forEach(function (item) {//not return it

//     console.log(item)
//     // return item
// })
// console.log(value)
// //filter return value
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNum = myNums.filter((item)=>item>4)//aise khud return hota hai is function

// //     console.log(newNum)
// const newNum = myNums.filter((item) => {
//     return item > 4
// })//aise khud return nahi hota hai is function

// console.log(newNum)
// const numbers = []

// myNums.forEach((Num) => {//if you have to do by object
//     if (Num > 4) {
//         numbers.push(Num)
//     }
// })

// console.log(newNum)
// const Book = [
//     {
//         language: "javascript",
//         file_name: "js"
//     },

//     {
//         language: "c",
//         file_name: "C"
//     },

//     {
//         language: "C++",
//         file_name: "advanceC"
//     },

//     {
//         language: "python",
//         file_name: "pycharm"
//     },

//     {
//         language: "Java",
//         file_name: "j"
//     }
// ]
// const userBooks = Book.filter((bk) => bk.language === "Java")
// console.log(userBooks)
// let codes = myNums.map((num) => num + 10)//map same as filter

// console.log(codes)
// //chaining

// codes = myNums.map((num) => num*10).map((num)=>num+1).filter((num)=>num>=40)//map chaining

// console.log(codes)
let myNumcreate=[1,2,3]
const area=myNumcreate.reduce(function(acc,currval){
    return acc +currval
},0/*initial value of accumulator(acc)*/)
console.log(area);
