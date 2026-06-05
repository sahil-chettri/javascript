function setusername(username){
    this.username = username
}

function createUser(username, email, password){
    setusername.call(this, username)

    this.email = email
    this.password = password
}

const sahil = new createUser(
    "sahil",
    "sahil@.com",
    "sahil123"
)

console.log(sahil)