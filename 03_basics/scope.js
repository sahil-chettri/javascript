// scope = the region of code where a variable is accessible (visible and usable)

let username = "sahil" // global scope 

function showname (){
    console.log(username);   // accessing global variable
    
}

showname()


//  Function Scope is varibale define inside a function





function one () {
    const userID = "101"

    function two (){

       const  website = "youtube "
       console.log(userID);
       
    }
    
    // console.log(website);
    two()
    
    
}
one ()


if (true) {
    const username ="sahil"
    if (username==="sahil"){
        const website = "youtube"
        console.log(username + website );
        
    }
}