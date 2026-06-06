class User {
    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }

    encryptpassword() {
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const sahil = new User("sahil", "123", "sahil@test.com")

console.log(sahil.encryptpassword()) 
console.log(sahil.changeusername())



// bts

function user (username, password, email) {
         this.username = username
        this.password = password
        this.email = email
    }

    user.prototype.encryptpassword = function() {
        return `${this.password}abc`
    }

     user.prototype.changeusername = function() {
     return `${this.username.toUpperCase()}`
    }
    

    const chettri = new user("chettri", "123", "chettri@test.com")

console.log(chettri.encryptpassword()) 
console.log(chettri.changeusername())
