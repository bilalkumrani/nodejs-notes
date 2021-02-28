// Events Module
// Node js has buil in module called "Events"
// where you can create, fire , listen, for your own events

// Example 1 Regestering for the event to be fired only one time using once
// Example 2 create an event emmiter instance and register a couple of callbacks
// Example 3 Regestering for the event with callback parameters


const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', ()=>{
 console.log("your name is Bilal");
});


//we can call multiple funtions with one event.
event.on('sayMyName', ()=>{
 console.log("your name is Khan");
});
event.on('sayMyName', ()=>{
 console.log("your name is umrani");
});


//befor firing an event you must register a listener like I have written above 
// the concept is simple emmiter object emit named events that cause previously registered listeners to be called , so and emitter object 
// basically has two main features :
// Emitting named events
//Registering and unregistering listener functions.
event.emit('sayMyName');


// we can register an event with callbacl parameters
event.on("checkPage", (sc,msg)=>{
    console.log(`status code is: ${sc} and it shows that page is ${msg}`)

});

event.emit("checkPage",200,"ok");


