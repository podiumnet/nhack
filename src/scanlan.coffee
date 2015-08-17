scanner = require "node-libnmap"
scanIp = require "./scanip"

module.exports = ->
  console.log "Scanning Your Local Area Network..."
  scanner.nmap "discover", (err, report) ->
    console.err err if err
    for net in report
      console.log "Found Adapter #{net.adapter}."
      if net.neighbors
        for neighbor in net.neighbors
          scanIp [neighbor]
      else
        console.log "No Online Devices Found on Adapter #{net.adapter}."
