// the http.createServer() method includes request and response parameters which is supplied by Node js.
// the request object can be used to get information about current http request eg:
// url, request, header, and data.

// the response object can be used to send a response for a current http request.

// if the response from the http server is supposed to be displayed as html,
// you should include an http header with the correct content type;


const http = require('http');
const server = http.createServer((req,res)=>{
   //console.log(req.url);
   if(req.url=="/"){
       res.end("Hello from the other side");
   }
   else if(req.url=="/about"){
    res.end("you know what? this is our about page");
   }
   else if(req.url=="/contact"){
    res.end("you can contact with us here");
   }
   else{
       res.writeHead(404, {"Content-type":"text/html"});
       res.end("<h1> the page you are trying to access is not available here </h1>");
   }
});

server.listen(8000,'localhost' ,(req,res)=>{
console.log("listening port no 8000");

});

//we have to use chromes ispect element-> network-> click on page in here -> Headers: here you 
// will find alot data about the page