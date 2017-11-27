const shell = require('shelljs')

let host = '116.62.132.173';
let serverPath = '/data/myblog'

shell.exec('scp -r dist root@' + host + ':' + serverPath)
shell.exec('scp -r server.js package.json routeServer root@' + host + ':' + serverPath)
