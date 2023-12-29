// Before Promises were introduced in JS due to ES6, most of the core methods or modules were written in callback based approach.
// So to tackle this issue, Promisification was introduced.

// Promisification is the transformation of callback based methods or fuctions into Promise based

// It is the process of converting a function that accepts a callback into a function that returns a promise.

//One way to do this is, we have to use the promisify method from the "util" module.
// We pass the function we have to promisify in the "promisify()" method and it returns the "promise based" function

let { promisify } = require("util");
let { readFile, writeFile } = require("fs").promises;
/*
let readFilePromise = promisify(readFile);
let writeFilePromise = promisify(writeFile);
*/

const workUsingAsync = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    console.log("Using Async-Await");
    console.log(first + second);
    await writeFile(
      "./content/writtenFilesAsync.txt",
      "\n New Text Added\n" + first + second,
      {
        flag: "a",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

workUsingAsync();

// Another or more easier method of promisifying is to promisify at time of loading the method from modules

// At the time we import the we use promises method on the require method as shown above
