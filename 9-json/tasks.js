//convert to Json
//dusry file me add krna hai
//read that file
//again into object
//show on console

const fs = require('fs');
const bioData = {
    name: "Bilal",
    age: "20",
    channel: "tekdot"
}
const Jsondata = JSON.stringify(bioData);
fs.writeFile("json1.json", Jsondata, (err)=>{
    console.log("Done");
});


fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData = JSON.parse(data);
    console.log(orgData);
    console.log(data);
});



