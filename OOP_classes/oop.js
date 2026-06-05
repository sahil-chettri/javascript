const user = {                              //object literal 

    username:'sahil',
    logincount :8,
    signedIn : true,
    getuserdeatil:(function(){
        console.log("got the user deatils from db");
        
    })
}
console.log(user.username);
user.getuserdeatil();
