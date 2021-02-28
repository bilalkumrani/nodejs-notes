const fs = require('fs');


//yaha per har hal me data pehly print hoga or baqi cheezen bad me
data1 = fs.readFileSync("read.txt","utf8");
console.log(data1);
console.log("after the data1");

//yaha pe jo cheez jaldi execute hogi wo pehly chalegi yaha per wait nahi karega program
fs.readFile("read.txt","utf8",(err,data)=>{
console.log(data);
});
console.log("after the data2");

