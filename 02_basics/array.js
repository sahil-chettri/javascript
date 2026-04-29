// array
const arr = [10,20,30,40]
const newarr =(10,20,30,40,50)
console.log(arr[0]);

// array methods

arr.push(50)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.includes(9));

console.log(arr.indexOf(40));



let array = [1, 2, 3, 4];

let newarray= array.join();

console.log(array);     // [1, 2, 3, 4]  (original array unchanged)
console.log( newarray);  // "1,2,3,4"     (string)
 


// slice    // splice

let slicedArray = array.slice(1, 3);
console.log(slicedArray); // [2, 3]
console.log(array); // [1, 2, 3, 4] (original array unchanged)

array.splice(1, 2, 'a', 'b');
console.log(array); // [1, 'a', 'b', 4] (original array modified)