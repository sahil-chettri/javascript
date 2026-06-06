// Inheritance means one object or class can access properties and methods of another object/class

// It helps you reuse code instead of writing the same code again

class user {
    constructor(username){
        this.username = username
    }

logMe(){
    console.log(`username is ${this.username}`); 
}
}

class admin extends user {
    constructor (username,email,password){
        super (username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course added by ${this.username}`);
        
    }
}

const sahil = new admin("sahil","sahil.com","123")
sahil.addCourse()

const chettri = new user ("chettri")     // he dont have access 
// chettri.addCourse()      // to add course
chettri.logMe()  


console.log(sahil instanceof admin);

