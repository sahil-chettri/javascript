// A static property belongs to the class itself, not to the objects (instances) created from the class

class user {
   constructor (username){
    this.username
   }
    logMe (){
        console.log(`username : ${this.username}`);
        

    }
   static createId(){
    return `123`
   }
}

const sahil = new user ("sahil")
console.log(sahil.createId());