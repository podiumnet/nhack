(function() {
  var scanIp, scanner;

  scanner = require("node-libnmap");

  scanIp = require("./scanip");

  module.exports = function() {
    console.log("Scanning Your Local Area Network...");
    return scanner.nmap("discover", function(err, report) {
      var i, len, neighbor, net, results;
      if (err) {
        console.err(err);
      }
      results = [];
      for (i = 0, len = report.length; i < len; i++) {
        net = report[i];
        console.log("Found Adapter " + net.adapter + ".");
        if (net.neighbors) {
          results.push((function() {
            var j, len1, ref, results1;
            ref = net.neighbors;
            results1 = [];
            for (j = 0, len1 = ref.length; j < len1; j++) {
              neighbor = ref[j];
              results1.push(scanIp([neighbor]));
            }
            return results1;
          })());
        } else {
          results.push(console.log("No Online Devices Found on Adapter " + net.adapter + "."));
        }
      }
      return results;
    });
  };

}).call(this);
