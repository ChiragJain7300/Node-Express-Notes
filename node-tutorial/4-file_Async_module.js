// This module is for reading and writing data in files asynchronously
const { readFile, writeFile } = require("fs");

// The below code doesnt work properly as both the "writefile" start executing at the same time as they are async.
/* 

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) console.log(err);
  //   console.log(result + "\n");
  const first = result;
  writeFile("./content/writtenFilesAsync.txt", first, (err) => {
    if (err) throw err;
    console.log("written data by first file");
  });
});
readFile("./content/second.txt", "utf-8", (err, result) => {
  if (err) console.log(err);
  //   console.log(result);
  const first = result;
  writeFile("./content/writtenFilesAsync.txt", first, { flag: "a" }, (err) => {
    if (err) throw err;
    console.log("written data by second file");
  });
});
*/

// Using Callbacks
/*
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) console.log(err);
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) console.log(err);
    // console.log(first + "\n");
    const second = result;
    // console.log(second);

    writeFile(
      "./content/writtenFilesAsync.txt",
      first + "\n" + second,
      (err) => {
        if (err) throw err;
        console.log("Data entered successfully");
      }
    );
  });
});
*/

// The above code using Promises
const readData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const work = () => {
  readData("./content/first.txt").then((data) => {
    const first = data;
    readData("./content/second.txt").then((data) => {
      const second = data;
      console.log(first + second);
    });
  });
};

const workUsingAsync = async () => {
  try {
    const first = await readData("./content/first.txt");
    const second = await readData("./content/second.txt");
    console.log("Using Async-Await");
    console.log(first + second);
  } catch (error) {
    console.log(error);
  }
};
work();
workUsingAsync();

// Before Promises were introduced in JS due to ES6, most of the core methods or modules were written in callback based approach.
// So to tackle this issue, Promisification was introduced.
// We will talk about this in the next file (6-Promisification.js)
