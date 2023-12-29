// file-Module is module which deals with the file system.
// There are two ways to use the file system namely synchronously and asynchronously
// This module deals with it synchnorously

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
/*
console.log("\n" + first + "\n" + second);
*/

writeFileSync("./content/writtenFilesSync.txt", first);
writeFileSync("./content/writtenFilesSync.txt", second, { flag: "a" });
writeFileSync("./content/writtenFilesSync.txt", first, { flag: "a" });

console.log(readFileSync("./content/writtenFilesSync.txt", "utf8"));
