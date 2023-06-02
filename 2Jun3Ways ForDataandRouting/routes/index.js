var express = require('express');
var router = express.Router();

//an example of using middleware for specific routes, just oput it in the route file
//
let app = express();
app.use((req, res, next ) => {
  console.log('Just in a route');
  next();
})


//This matches http://localhost:3000/data
//
//Way 1: Use a query string with a GET method, req.query has the params
//
router.get('/data', function(req, res, next) {
res.send(req.query.name)
});

router.post('/data', (req, res, next) => {
  res.send(req.body.name)

})
//match http://localhost:3000/data/string/string
router.get('/data/:name/:instrument', (req, res, next) => {
let foo;
  res.send(req.params.name)

})

var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'api.openweathermap.org',
  'path': '/data/3.0/onecall?lat=42.4&lon=-71.0&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();

module.exports = router;
