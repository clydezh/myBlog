#!/usr/bin/env bash

host=116.62.132.173
serverPath=/data/myblog

scp -r dist root@${host}:${serverPath}
#scp -r server.js package.json routeServer root@${host}:${serverPath}
