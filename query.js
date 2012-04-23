var http = require('http');

var args = process.argv.splice(2);
var ip = args[0];
var worker = args[1]; 

process.on('uncaughtException', function(exception) {console.log(new Date(), "server down")});

  var c, http, i, options, query, s, send;

  http = require('http');

  options = {
    host: ip,
    port: 80,
    path: '/'
  };

  s = 0;
  c = 0;

  query = function(param) {
    options.path = "/?" + String(worker) + "w" + i;
    s++;
    return http.get(options);
  };

  i = 0;

  send = function() {
    while (true) {
      if (s - c > 10000) {
        break;
      }
      query(i++);
    }
  };

  send();

