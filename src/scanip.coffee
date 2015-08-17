scanner = require "node-libnmap"

module.exports = (ip) ->
  opts =
    range: ip

  opts.ports = GLOBAL.port if GLOBAL.port

  scanner.nmap 'scan', opts, (err, report) ->
    console.log "  Scanned Range: #{ip}."
    for result in report
      specific = result[0]
      console.log "    IP: #{specific.ip}" if specific.ip
      console.log "    Hostname: #{specific.hostname}" if specific.hostname
      for port in specific.ports
        console.log "      Found Port: #{port.port} (#{port.state})"
        console.log "        Port Protocol: #{port.protocol}" if port.protocol
        console.log "        Port Service: #{port.service}" if port.service
