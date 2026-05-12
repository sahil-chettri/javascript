const usermail = []
if (usermail){
    console.log("usermail was sahil@ai");
}else{
    console.log("usermail not found");
    
}



// Falsy Values 

false , 0 , -0 , BigInt , 0n ,  null , undefined , NaN 


// Truthy Values
true , "0" , "" ,1 , -1 , function(){}, [] , {}
  

if (usermail.length === 0){
    console.log("arrey is empty ");
    
}

const emptyobj = {}
if(Object.keys(emptyobj).length===0){
    console.log("arrey is empty ");
    
}

// Nullish Coalescing Operator 

let username = null;
console.log(username ?? "ghost");



// // Ternary Operator

// condition ? trueValue : falseValue 

let age = 18
let result = age>=18 ? "adult" : "minor";
console.log(result);
