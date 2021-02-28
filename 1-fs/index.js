const fs = require('fs');

// fs.writeFile('read.txt',"today is awesome day",(err)=>{
//     console.log("File is created");
// });


//we pass them a function as an argument (a call back)
//that gets called when that task is completed
//the callback has argument which tells wether the operation completed successfully


// fs.appendFile("read.txt","\n this is appended",(err)=>{
//     console.log(err);
// });
fs.readFile("read.txt", "utf8",(err,data)=>{
    console.log(err);
    console.log(data);
})



