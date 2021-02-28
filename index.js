//REPL
// js expression
// use variables
// multiline code
// use (_) to get the last result
// we can use editor mode

const fs = require('fs');
//fs.writeFileSync("read.txt","Welcome to node js");
fs.appendFileSync("read.txt", "\n How are you? iam fine thankyou  ");


// Node js include another additional datatype called buffer
//not available in browsers javascript
//buffer is mainly used to store binary data
//while reading from a file or recieving packets over the network
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

//converting buffer data in simple string
org_data = buf_data.toString();
console.log(org_data);

//to rename the file
//fs.renameSync("read.txt","readwrite.txt");