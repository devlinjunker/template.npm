#! /Users/devlinjunker/.nvm/versions/node/v16.13.0/bin/node

var cmd = require("child_process");
var process = require("process");

var displayOut = function (error, stdout) {
  console.log(error);
  if (error) {
    console.error(stdout);
    process.exit(127);
  }
  console.log(stdout);
};

cmd.exec("npm run format", displayOut);

cmd.exec("npm run lint", displayOut);
