const http = require('http')
const fs = require('fs')
const user = require("os").userInfo().username;
const osType = require("os").type();
const time = require("os").uptime()/60;
const dir = __dirname;
const fileName = require("path").basename(__filename);
const myModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  // Task 1
  res.end('Current user name: ' + user + '\n' + 'OS Type: ' + osType + '\n' + 'System Worktime: ' + Math.round(time) + ' minutes' +
  '\n' + 'Current work directoory: ' + dir + '\n' + 'Server file name: ' + fileName);
  //Task 2
  // res.end('Date of request: ' + myModule.currentTime() + '\n' + myModule.greating() + ', ' + user);
})

server.listen(process.env.PORT || 5000)