// Generated by CoffeeScript 1.3.1
(function() {
  var c, http, i, options, query, s, send;

  http = require('http');

  options = {
    host: '10.144.3.211',
    port: 80,
    path: '/'
  };

  s = 0;

  c = 0;

  query = function(param) {
    options.path = "/?" + i;
    s++;
    return http.get(options, function() {
      console.log(param);
      c++;
      return send();
    });
  };

  i = 0;

  send = function() {
    var _results;
    _results = [];
    while (true) {
      if (s - c > 100) {
        break;
      }
      _results.push(query(i++));
    }
    return _results;
  };

  send();

}).call(this);
