function saymyname (){
    console.log("S");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");  
}
saymyname       // it is a refrance of the function 
 saymyname()    // it is a executive function 

function addtwoNumbers (number1,number2){   
    console.log(number1+number2);
}
addtwoNumbers(10,20)


function addtwoSubjectsmarks (mark1,mark2){    // stored in a variable 
    let result = mark1+mark2
    return result
}
const result = addtwoSubjectsmarks (20,20)
console.log("result: ",result);

function studentisPasssed (student){
    return`${student} passed the exam `
}
console.log(studentisPasssed("roll no 1"))




function loginusermassage (username ) {
    return `${username} just logged in `
}
 console.log(loginusermassage("sahil"))


function calclulatecartprice (...number1){
      return number1
}
console.log(calclulatecartprice(200,400,500))



const phones  = { 
    phone : "iphone 17",
    price :70000
}

function handleobject(anyobject){
    console.log(`phone name is ${anyobject.phone} and the price was ${anyobject.price}`);
    

}
handleobject(phones)

const mynewarray = [200,300,400,500]
function returnsecoundvalue (getarray){
    return getarray [2]
}
console.log(returnsecoundvalue(mynewarray));
