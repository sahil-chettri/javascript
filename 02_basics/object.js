// objects literals

const jsuser = {
    name : "sahil",
    age : 22,
    location  : "shimla",
    mail : "sahil@example.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
 }

console.log(jsuser["mail"]);   // this is best way to access the value of a key in an object
console.log(jsuser["name"]);   
console.log(jsuser["location"]);
console.log(jsuser["isLoggedIn"]);
console.log(jsuser["lastLoginDays"]);

jsuser.name = "sahil chettri"  // this is the  way to update the value of a key in an object
console.log(jsuser);


Object.freeze(jsuser)  // this method is used to freeze the object and prevent any changes to it
jsuser.name = "sahil "  // this will not update the name because the object is frozen
console.log(jsuser);




jsuser.greeting = function(){
    console.log("hlo js users ");
}
jsuser.greetingtwo = function(){
    console.log(`hlo js users ${this.name}`);  // this is how we can use the this keyword to access the properties of an object inside a method  
}
console.log(jsuser.greeting());  // this is how we can add a method to an object and call it
console.log(jsuser.greetingtwo()); 

