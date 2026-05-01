// const vscodeuser = new Object(); this is a signletun object 

const vscodeuser = {}     // this is a non signletun object
vscodeuser.name= "sahil chettri";
vscodeuser.id = "101";
vscodeuser.IsLoggedIn = true;

// console.log(vscodeuser);

const githubuser = {
    email : "example.com",
    fullname :{
        userfullname :{
            firstname : "sahil",
            lastname : "chettri"

        }

    }
}
// console.log(githubuser.fullname.userfullname.firstname);  // this is how we can access the nested object properties in an object    

const obj1 ={1:"a", 2:"b", 3:"c"};
const obj2 ={4:"d", 5:"e", 6:"f"};
const obj3 = {...obj1, ...obj2};   // this is how we can merge two objects using the spread operator    
console.log(obj3);

console.log(Object.keys(vscodeuser));
console.log(Object.values(vscodeuser));

