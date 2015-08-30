# NHack
NHack is a network scanner that uses nmap.
It is written in nodejs, and uses the [node-libnmap](https://github.com/jas-/node-libnmap) library to perform it's operations.
Node-libnmap in turn uses the nmap program, which must be installed for nhack to work.

## Installation & Running:
We run this command as root to get nhack installed:

    # npm install -g nhack

After that, you can run nhack as a normal user:

    $ nhack [options]

## Command Line Interface
NHack scans the local network when run.
It supports the following options:

|Option|Description|
|---|---|
|`-p, --port <ports>`|Scan a specific set of ports instead of all ports.|
|`-h, --help`|View help information.|
|`-v, --version`|View version information.|
