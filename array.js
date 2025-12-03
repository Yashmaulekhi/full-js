let a =[5,6,3,9,8]
console.log(a)
console.log(typeof(a))
a.push(2)
console.log(a)
a.pop(3)//pop will ony remove last element
console.log(a)
a.shift(3)//shift will take 1st element
console.log(a)
a.unshift(7)
console.log(a)
console.log(a.includes(7))


console.log(a.indexOf(7))
const d = ["a","b","c","d"]
const e = ["e","f","g","h"]
d.push(e)
console.log(d)
  
let f =d.concat(e)
console.log(f)
let g =[...d,...e]//same as concat
console.log(g)
const r= g.flat(Infinity)//if you have more arraray inside araay many times and want a selement 
//so by not using a[][]...., you can use flat to make a arrayelement all and infinite means break it infinite timess as five times if array inside array we can put five
console.log(r)
console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"))
