"use strict";

var seneca = require('seneca')()

seneca.add({ role:'user', cmd:'login' }, function (args, callback) {
  callback(null, { loggedIn:true })
})

seneca.add({ role:'user', cmd:'commor' }, function (args, callback) {
  callback(null, { loggedAwait:true })
})

seneca.listen()