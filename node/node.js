// 1. info about my node js

const http = require("http");
const os = require("os");

const getTotalMemory = () => os.totalmem() / (1024 * 1024 * 1024);
console.log(getTotalMemory());

// create local server

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello my name is Unique!",
    })
  );
});

server.listen(7000);

console.log("server is running on port 7000");
