// 1. info about my node js

const os = require("os");

const getTotalMemory = () => os.totalmem() / (1024 * 1024 * 1024);
console.log(getTotalMemory());
