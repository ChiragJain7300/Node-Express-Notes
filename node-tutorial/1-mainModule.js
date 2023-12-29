// GLOBALS or global objects are in-built objects which are a part of the JavaScript and are available anywhere inside the application without importing any modules

/* Some Important Globals.
    __dirname
    __filename
    require
    module
    console
    process
    exports    
*/
console.log(__dirname);

// Every file in a node application is a module. There will be multiple js files but we run only one(entry) js file for the whole application.
// To use or access the different js files created we use the "module" global object.
// Module object has a "export" object inside it which is used to export(share) the code we want the other modules to use.
// The other modules(js files) use "require" to store all the exported code to access it in that file
// Just like access modifiers in JAVA, Here we decide which code to share or restrict by using the export object.

const names = require("./ModulesExplain/1-testCode");
console.log(names);
console.log(names.theirAges);
const greetingFunc = require("./ModulesExplain/2-testCode");

greetingFunc(names.john.toUpperCase());
greetingFunc(names.doe.toUpperCase());

// If we are loading(importing) any module and if that module contains a function which is invoked, node will execute that function and also do the exporting and stuff

require("./ModulesExplain/3-testCode");
