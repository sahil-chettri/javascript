// genrate a randome color 

const randomecolor = function(){
    const hex = "0123456789ABCDEF"
 let color = '#'
 for(let i =0; i<6; i++){
    color+=hex[Math.floor(Math.random() * 16)]
 }
  return color
}
console.log(randomecolor());

let intervalID
 const startchangeingcolor = function(){
    if(!intervalID){
           intervalID = setInterval(chnagebgcolor,1000)
    }

   function chnagebgcolor(){
     document.body.style.backgroundColor = randomecolor();
   }
 };
 
 const stopchangeingcolor = function(){
   clearInterval(intervalID);
   intervalID = null;
 };

document.querySelector("#start").addEventListener
("click",startchangeingcolor )

document.querySelector("#stop").addEventListener
("click",stopchangeingcolor )