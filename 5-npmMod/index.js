const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue('hello world'));
console.log(chalk.blue.underline.inverse("Hello world in blue background"));
console.log(chalk.green.underline.inverse("Success"));

//using validator we can validate many things like phone no url etc
var status = validator.isEmail("Bilal@@bk.acom");


//here i have used ternary application which will print in green if its true else it will print in red
console.log(status ? chalk.green.inverse(status) : chalk.red.inverse(status));

