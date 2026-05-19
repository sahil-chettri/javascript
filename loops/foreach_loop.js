const coding =["python","java","rust","bun"]
coding.forEach(  function (lang){
    console.log(lang);
    

})


coding.forEach((item,index , arr )=>{
    console.log(item,index,arr);
    
})


const myCoding = [
    {
        languagename : "python",
        filename : ".py"

    },
        {
        languagename : "javascript",
        filename : ".js"


    },
        {
        languagename : "java ",
        filename : "java"


    }
]

myCoding.forEach( (item)=> {
    
    console.log(item.languagename);

})
