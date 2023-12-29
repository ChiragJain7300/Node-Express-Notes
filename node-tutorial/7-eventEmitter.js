//  Just like we events in VanillaJS, we also use them in the backend.
// Event Emitter is used to create custom events.
// Node.js uses "events" module to create and handle custom events. The EventEmitter class can be used to create and handle custom events.

const EventEmitter = require("events");

let eventEmitter = new EventEmitter();

eventEmitter.on("newEvent", () => {
  console.log("new Event was triggered");
});
eventEmitter.on("newEvent", (msg) => {
  console.log(`new Event was triggered with the Message : ${msg}`);
});

eventEmitter.emit("newEvent", "hello World!!!");
