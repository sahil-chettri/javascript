
// 1. Click Event 
// const NewElement = document.getElementById("host");

// NewElement.addEventListener("click", () => {
//     NewElement.textContent = "Linux User";
//     NewElement.style.backgroundColor = "blue";
// });
// // 2. Double Click Event 
// const NewElement = document.getElementById("host");

// NewElement.addEventListener("dblclick", () => {
//     NewElement.textContent = "Double Clicked";
//     NewElement.style.backgroundColor = "green";
// });



// const child1 = document.getElementById("child1");
// child1.c("click",()=>{
//    child1.textContent = ("orange is best frute")
// });


// const parent = document.getElementById("parent");
// console.log(parent.children);

//    for (let child of parent.children) {
//    child.addEventListener("click",()=>{
//       child.textContent = ("clicked sucessfully")
//    })
// }

const grandparent = document.getElementById("grandparent")
grandparent.addEventListener("click",(e)=>{
   console.log(e).target;
   
   console.log("grandparent is clicked");
   
} ,true)

const parent = document.getElementById("parent")
parent.addEventListener("click",()=>{
   console.log("parent is clicked");
   
},false)

const child = document.getElementById("child")
child.addEventListener("click",()=>{
   console.log(" child is clicked");
   event.stopPropagation();
})