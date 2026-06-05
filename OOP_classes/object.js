function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}

const tea = new createUser("chai", 20)

tea.increment()   // score becomes 21
tea.printme()