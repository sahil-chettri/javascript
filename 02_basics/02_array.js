const cars = ["Saab", "Volvo", "BMW"];
const bikes = ["Yamaha", "Honda", "Suzuki"];

// cars.push(bikes)
console.log(cars); // ["Saab", "Volvo", "BMW", ["Yamaha", "Honda", "Suzuki"]]

cars.concat(bikes)
console.log(cars); // ["Saab", "Volvo", "BMW",


const allVehicles = cars.concat(bikes);
console.log(allVehicles); // ["Saab", "Volvo", "BMW", "Yamaha", "Honda", "Suzuki"]


const allVehiclesSpread = [...cars, ...bikes];
console.log(allVehiclesSpread); // ["Saab", "Volvo", "BMW", "Yamaha", "Honda", "Suzuki"]    
 

let new_array = [1,2,3, 4, [4, 5, 6, [7, 8, 9]]];
const  real_array = new_array.flat(Infinity);
console.log(real_array); // [1, 2, 3, 4,  5, 6, 7, 8, 9]



console.log(Array.isArray("sahil")); // false

console.log(Array.from("sahil")); // ["s", "a", "h", "i", "l"]


console.log(Array.from({name : "sahil"})); // it will give a empty array cause we need to we need need array of a key or value pair to convert it into array

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3)); // using array.off  method web get a new array from a set of elements 


