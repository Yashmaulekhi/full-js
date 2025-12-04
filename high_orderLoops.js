const myObject= {
    my:"inn=trest ",
    c_r:"is:🤖"
}
for(const key in myObject){
    console.log(key)
}
stringz="avacado"
for(const key of stringz){
    console.log(key)
}
for(const key in stringz){
    console.log(key)
}
//map is a key value pair with unique value
const map= new Map()
map.set("in","INDIA")
map.set("USA","United states Of America")
map.set("Dn","Denmark")
console.log(map)
for(const [key,value] of map){
    console.log(value)
    
}
for(const [key,value] of map){
    console.log(key)
    
}


for(const key in myObject){
    console.log(key,"=*=",myObject[key])
}



era=["c","c++","java","python"]

era.forEach(function (item){
    console.log(item)
})
era.forEach((item)=>{
    console.log(item)
})
function char(item){//by define function
    console.log(item)
}
era.forEach(char
)
era.forEach((item,index,arr)=>{//it ha s acces of item index array
    console.log(item,index,arr)
}
)
const coolcode=[
    {
        language:"javascript",
        file_name:"js"
    },

    {
        language:"c",
        file_name:"C"
    },

    {
        language:"C++",
        file_name:"advanceC"
    },

    {
        language:"python",
        file_name:"pycharm"
    },

    {
        language:"Java",
        file_name:"j"
    }
]
coolcode.forEach(function (item){
    console.log(`${item.language} has file name ${item.file_name}`)
})