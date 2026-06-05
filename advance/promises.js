const promiseOne = new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log('async task compelete');
        reslove()
    },1000)
})

promiseOne.then(function(){
    console.log("promise comeplete");
    
})

const promise = new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log('async task two');
        reslove()
        
    })
}).then(function(){
    console.log('async reslove');
})


const promiseThree = new Promise(function(reslove,reject){
    setTimeout(function(){
    reslove({username:"sahil",email:"sahil@test.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(reslove,reject){
   setTimeout(function(){

    let error =  true
   if (!error ) {
      reslove({username:"sahil",Password:"123"})
   }  else {
    reject("ERROR: something went wrong ")
   }
   },1000)
})
 
promiseFour.then((user)=>{
   console.log(user);
   return  user.username
   
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is  either  resolve or reject "))




const promiseFive = new Promise(function(reslove,reject){
   setTimeout(function(){

    let error =  true
   if (!error ) {
      reslove({username:"chettri",Password:"123"})
   }  else {
    reject("ERROR:  js  went wrong ")
   }
   },1000)
})
 
async function consumepromiseFive(){
   try {
        const responce = await promiseFive
    console.log(responce);  
   } catch (error) {
    console.log(error);
    
   } 
}

consumepromiseFive()
 async function getalluser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getalluser();



fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });