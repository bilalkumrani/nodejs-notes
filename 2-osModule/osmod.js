//we will use os module

const os = require('os');

//to see which architecture are we using?
console.log(os.arch());

// here we are talking about memory of RAM
//to see how much memory is free on my system
const freememory = os.freemem();
console.log(`${freememory/1024/1024/1024}`);

//to see total memory of my system
console.log(os.totalmem()/1024/1024/1024);

//to check host name
console.log(os.hostname());

//to see the plateform
console.log(os.platform());

//to see where is temp directory
console.log(os.tmpdir());