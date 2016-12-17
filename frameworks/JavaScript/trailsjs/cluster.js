'use strict'

/* eslint-disable */
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.pid + ' died')
  })
}
else {
  require('server.js')
}
