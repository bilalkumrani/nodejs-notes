// lets see how our all functions and variables in a single module are private
// and how we are able to use 
// exports,
// require,
// module,
// __filename,
// __dirname


//this is module wrapper
(   function(exports, require, module,_filename,_dirname){
    const name = 'Bilal';
    console.log(name);
}
);




//actually the code we write here is inserted inside that module wrapper thats why it become 
//private and we can use exports etc which are given in parameter list

