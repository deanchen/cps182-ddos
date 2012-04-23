var http = require('http');

var args = process.argv.splice(2);
var ip = args[0];
var worker = args[1]; 

process.on('uncaughtException', function(exception) {console.log(exception), console.log(new Date(), "server down")});

var options = {
    host: ip,
    port: 80,
    path: '/'
};

var s = 0;
var c = 0;

var query = function(param) {
    options.path = "/?s=" + worker + "w" + i;
    s++;
    return http.get(options, function(res) {
        /*
        var pageData;
        pageData = "";
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            return pageData += chunk;
        });
        res.on('end', function() {
            return console.log(pageData);
        });
        console.log(param);
        */
        c++;
        return send();
    });
};

var i = 0;

var send = function() {
    while (false) {
      if (s - c > 10000) {
        break;
      }
      query(i++);
    }
    return query(i++);
};

send();
