#!/usr/bin/env node

(function() {
  var list, pkg, program, scanIp, scanLan;

  program = require("commander");

  pkg = require("../package.json");

  scanLan = require("./scanlan");

  scanIp = require("./scanip");

  list = function(val) {
    return val.split(',');
  };

  program.version(pkg.version).option('-p, --port <ports>', 'Scan a specific set of ports instead of all ports.', list).parse(process.argv);


  /*
    Range Option Doesn't Work - Disabled for now.
    .option '-r, --range <addresses>', 'Scan a specific set of ranges instead of entire LAN.', list
   */

  console.log("NHack version " + pkg.version + " by " + pkg.author + ". Repo: " + pkg.repository.url + ".");

  if (program.port) {
    GLOBAL.port = program.port;
  }

  if (program.range) {
    scanIp([program.range]);
  } else {
    scanLan();
  }

}).call(this);
