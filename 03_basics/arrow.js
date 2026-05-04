const user = {
    username :"sahil",
    password :"abcxyz",

    welcomemassage : function(){
        console.log(`${this.username}, welocome to  the website`);
        console.log(this);
        
        
    }
}
user.welcomemassage()
user.username = "sam"
user.welcomemassage()

console.log(this);



function day(){
    let day = "monday"
    console.log(this.day);
    
}
day()


const addTow = (num1 , num2)=>{
    return num1 + num2
}

console.log(addTow(5, 5))

const addTownum = (num1,num2)=> num1+num2
console.log(addTow(5, 5))
