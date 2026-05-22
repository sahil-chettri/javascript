const myNUm =[1,2,3]
const mytotal = myNUm.reduce (function (accumulator , currentValue){
    console.log(`accumulator: ${accumulator} and  currentValue :${currentValue}`);
    
    return accumulator + currentValue

}, 0)
console.log(mytotal);


const shopingcart = [
    {
        coursename : "javascript",
        price : 999 ,    
    },
    {
        coursename : "python",
        price : 888
    },
    {
        coursename : "c++",
        price : 2000
    }
]

const priceToPay = shopingcart.reduce ((accumulator ,item)=> accumulator+item.price , 0)
console.log(priceToPay);
