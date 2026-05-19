// const arr =[1,2,3,4,5]
// for (const num  of arr ) {
//     console.log(num);
    
// }
 

//maps

const map = new Map()
map.set("ind","india")
map.set("nep","nepal")
map.set("eng","england")
// console.log(map);
for (const [key,value]of map) {
    console.log(key,':-',value);
    
}

// const myobject = {
//     "game 1" : "gta v ",
//     "game 2" : "nsf",

// }

// for (const [key,value]of myobject) {           //object is not iterable
//  console.log(key,':-',value);

// }


const newObject = {
    js: "javascript",
    cpp:"c++",
    rb :"ruby",
    rt : "rust"
}

for (const key in newObject) {
    console.log(`${key} shortcut is for ${newObject[key]}`)
    
   
}


const programing = ["js","python","c++","rust"]
for (const key in programing) {
    console.log(programing [key]);
    
}

