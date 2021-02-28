const path = require('path');
// to see directory name in which we are currently workiing
console.log(path.dirname("C:/Users/Bilal Khan/Downloads/web/nodejs/pathmodule/pathmod.js"));

//to see the extention of file we are currently woriking on
console.log(path.extname("C:/Users/Bilal Khan/Downloads/web/nodejs/pathmodule/pathmod.js"));

//to see the base name like what is the actuallly file name
console.log(path.basename("C:/Users/Bilal Khan/Downloads/web/nodejs/pathmodule/pathmod.js"));

//to check all the above property in one object we have to use path.parese 
console.log(path.parse("C:/Users/Bilal Khan/Downloads/web/nodejs/pathmodule/pathmod.js"));
