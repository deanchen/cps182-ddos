// Generated by CoffeeScript 1.3.1
(function() {
  var c, http, i, options, query, s, send;

  http = require('http');
  querystring=require('querystring');

  s = 0;
  c = 0;

  query = function(param) {
    s++;
    return postData(param);
  };

  i = 0;

  send = function() {
    var _results;
    _results = [];
    while (true) {
      if (s - c > 10000) {
        break;
      }
      _results.push(query(i++));
    }
    return _results;
  };

  postData = function(i) {
   var data = querystring.stringify({
   log: i+'thisismyusername'+i,
   pwd: i+'thisismypass'+i,
   rememberme: 'forever',
   "wp-submit": 'Log In',
   redirect_to:'http://10.144.3.211/wp-admin/' ,
   testcookie: '1'
  });

  options = {
    host: '10.144.3.211',
    port: 80,
    path: '/wp-login.php',
    method: 'POST',
    headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': data.length
    }
  };

   // Set up the request
   var post_req = http.request(options, function(res) {
      var lastChunk = "";

      res.setEncoding('utf8');

     // res.on('data',function(chunk) {
     //     console.log(chunk);
     // });

      res.on('end', function(){
        c ++;
        console.log(i);
        return send();
      });
   });

   // post the data
   post_req.write(data);
   post_req.end();
 }

 send();

}).call(this);