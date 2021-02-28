//create a folder name it bilal


 const fs = require('fs');
 fs.mkdirSync("bilal");



//create a file in it name it bio.txt and insert data into it
fs.writeFileSync("bilal/bio.txt","my name is bilal and im writing this code");

// add more data into the file at the end of the file after existing data
fs.appendFileSync("bilal/bio.txt", "\n this is more data at the end of the file");


//read the data without getting buffer first we will use file encoding
const data = fs.readFileSync('bilal/bio.txt',"utf8");
console.log(data);

//rename the file name it mybio.txt
fs.renameSync("bilal/bio.txt","bilal/mybio.txt");
//now delete both the file and folder in it

// fs.unlinkSync("bilal/mybio.txt");
// fs.rmdirSync("bilal");


