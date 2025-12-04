for(i=0;i<10;i++){
    const element =i;
    console.log(element)
}
//console.log(element)//not define
for(i=0;i<5;i++){
    console.log(`${i} is inner loop`)
for(j=0;j<5;j++){
    console.log(`${i} is inner loop ${j}is outer`)
}
}

for(i=0;i<6;i++){
    if(i==1){
        continue;//expect this condition
    }

    if(i==4){
        break;//out of loop
    }
    console.log(i)
}
//--------------while---------------------------------
let arr=0
let myArray =["Flash","batman","Superman"]
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`)
    arr++;
}
a=11
do{
    console.log("at least one time run")
    a++

}while(a<10)