// This demo is regarding the path module provided by the nodeJS

const path = require("path");

const filename = path.join("/content/", "subcontent", "random.txt");
console.log(filename);

const base = path.basename(filename);
console.log(base);

// for absolute path
const absolute = path.resolve(__dirname, "content", "subcontent", "random.txt");
console.log(absolute);



