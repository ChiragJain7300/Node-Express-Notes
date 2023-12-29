// This is one of the important built-in modules provided by NodeJS
// OS module or Operating System module contains information and methods regarding the OS of the system.
// Some of its methods are mentioned below......

// First Step is obviously loading the script(module)
const os = require("os");

console.log(os.userInfo());

const sysUpTime = os.uptime();
console.log(
  `The system upTime is ${sysUpTime} seconds \nor ${
    sysUpTime / 3600
  } hours \nor ${sysUpTime / (3600 * 24)} days`
);

const currentOs = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
