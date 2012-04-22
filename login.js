var http = require('http');
 
var args = process.argv.splice(2);
var ip = args[0];
var worker = args[1];


  var http = require('http');
  var querystring=require('querystring');

  var s = 0;
  var c = 0;

  var query = function(param) {
    s++;
    return postData(param);
  };

  i = 0;

  var send = function() {
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

  var postData = function(i) {
   var data = querystring.stringify({
   log: worker+'-thisismyusername'+i,
   pwd: worker+'-thisismypass'+i,
   rememberme: 'forever',
   "wp-submit": 'Log In',
   redirect_to:'http://10.144.3.211/wp-admin/' ,
   testcookie: '1'
  });

  var options = {
    host: ip,
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
     //});

      res.on('end', function(){
        c ++;
       // console.log(worker+"-"+i);
        return send();
      });
   });

   // post the data
   post_req.write(data);
   post_req.end();
 }

 send();

