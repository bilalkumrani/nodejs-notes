//streams are objects that let you read data from a source or write data to a destination in continous fashion
//in NodeJs there are four types of streams
// streams means listening to music or watching video in a real time instead downloading file and watching it later

// Readable: Stream which is used for read operation
// Writeable: Stream which is used for write operation
// Duplex: stream which can be used for both read and write operation
// Transform: A type of dublex stream where the output is computed based on the input

// Each type of stream is an EventEmitter instance and throws several
// events on different instance of time for example some of the commonly
// used events are:

// data: This event is fired when there is data availbale to read.
// end: This event is fired when there is no more data available to read.
// error: This event is fired when there is an error in sending or recieving data.
// finish: Thid event is fired when all the data haa been flushed
