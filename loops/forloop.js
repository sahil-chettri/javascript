// for (let i = 0; i <=10; i++) {
//     if (i==5 ) {
//         console.log("5 is best number");
//     }
//   console.log(i);         
// }


// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop value : ${i}`);
// for (let j = 1; j <=10; j++) {
//         console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(i + `*` + j + `=`  + i*j);
//     }
// }



// let myarray = ["apple", "banana","orange"] 
// console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }


// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index==5){
//         console.log("5 is detact ");
//         break     
//     }
//     console.log(`value of i ${index}`);
// }



for (let index = 1; index <= 20; index++) {
    if (index==5){
        console.log("5 is detact ");
        continue
    }
    console.log(`value of i ${index}`);
}

