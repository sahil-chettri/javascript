const myNum = [1,2,3,4,5,6,7,8,9]
// const newNums = myNum.map( (num)=> num + 10 ) 
const newNum =myNum.map( (num)=> num * 10).map( (num)=> num + 1 ).filter( (num)=> num>= 40)
console.log(newNum);



const user = [                  // You only want usernames.
    {
        id : 1,
        name : "sahil"
    },
    {
        id:2,
      name : "priyanka"
    }
];       

const usernames = user.map ((user)=> {
    return user.name
});
console.log(usernames);

