// Json stands for javascript object notation
// Json is lightweight format for storing and transporting data.
//Json is often used when data used sent from a server to a web page.


//creating an object
const bioData = {
    name : "Bilal",
    age : "20",
    channel: "Tekdot"
}
console.log(bioData.channel);

// converting object into Json
const JsonData = JSON.stringify(bioData);
console.log(JsonData);


//now i want to convert Json into object
 const objdata = JSON.parse(JsonData);
 console.log(objdata);