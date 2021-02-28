// its our own module

const add = (a,b)=>{
    return (a+b);
}

const sub = (a,b)=>{
    return (a-b);
}

// changing this fuction from private to public
// because of this now fuction can be imported in other modules
//if we are exporting only one function then we will use this

//  module.exports = add;

// if we are exporting more than one functions than we will use this 

module.exports.add = add;
module.exports.sub = sub;