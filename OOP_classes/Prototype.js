// In JavaScript, a prototype is an object from which other objects inherit properties and methods. JavaScript uses prototype-based inheritance instead of classical class-based inheritance.


// Prototype with Constructor Functions

function person (name){
    this.name = name
}

// Add a method to the prototype

person.prototype.greet = function(){
    return (`hello my name is ${this.name}`)
};

const sahil = new person("sahil")
console.log(sahil.greet());
