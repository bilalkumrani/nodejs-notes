const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   //console.log(req.url);
   if(req.url=="/"){
       res.end("Hello from the other side");
   }
   else if(req.url=="/about"){
    res.end("you know what? this is our about page");
   }
   else if(req.url=="/userapi"){
       fs.readFile(`${__dirname}/UserApi.json`,"utf-8",(err,data)=>{
        //const objdata = JSON.parse(data);
        res.writeHead(200,{"content-type":"application/json"})
           res.end(data);
       })
   }
   else{
       res.writeHead(404, {"Content-type":"text/html"});
       res.end("<h1> the page you are trying to access is not available here </h1>");
   }
});

server.listen(8000,'localhost' ,(req,res)=>{
console.log("listening port no 8000");
});
