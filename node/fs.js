// write a nodejs function to read the content from the file and show it
// in browser using http

const fs = require("fs");
const http = require("http");
const crypto = require("crypto");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "concent-type": "application/json",
  });
  const result = fs.readFileSync("./txt.txt").toString();
  res.end(`The content of the files is : ${result}`);
});

server.listen(8000);
console.log(`Server running at http://localhost:8000`);

// write a OTP generator dunction that genereate 6 digit numbers
// math.random

const generateOTP = (digits = 6) => {
  maxNum = Math.pow(10, digits - 1);
  minNum = Math.pow(10, digits) - 1;
  const result = crypto.randomInt(maxNum, minNum);
  return result;
};

console.log(generateOTP());
