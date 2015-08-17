(function() {
  var scanner;

  scanner = require("node-libnmap");

  module.exports = function(ip) {
    var opts;
    opts = {
      range: ip
    };
    if (GLOBAL.port) {
      opts.ports = GLOBAL.port;
    }
    return scanner.nmap('scan', opts, function(err, report) {
      var i, len, port, result, results, specific;
      console.log("  Scanned Range: " + ip + ".");
      results = [];
      for (i = 0, len = report.length; i < len; i++) {
        result = report[i];
        specific = result[0];
        if (specific.ip) {
          console.log("    IP: " + specific.ip);
        }
        if (specific.hostname) {
          console.log("    Hostname: " + specific.hostname);
        }
        results.push((function() {
          var j, len1, ref, results1;
          ref = specific.ports;
          results1 = [];
          for (j = 0, len1 = ref.length; j < len1; j++) {
            port = ref[j];
            console.log("      Found Port: " + port.port + " (" + port.state + ")");
            if (port.protocol) {
              console.log("        Port Protocol: " + port.protocol);
            }
            if (port.service) {
              results1.push(console.log("        Port Service: " + port.service));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    });
  };

}).call(this);
