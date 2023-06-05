var express = require('express');
var router = express.Router();

// the comemnted route in app.js matches http://localhost:3000/something/data
// Way #1: query string
router.patch('/data', function(req, res, next) {
  res.send(`Recvd: ${req.query.name}, ${req.query.age}, and ${req.query.string}`);
});

router.post('/data', (req, res, next) => {
  res.send(`Recvd: ${req.body.name}, ${req.body.age}, and ${req.body.string}`);
})

//Named params, like /data/Phil/55/a%20string
router.get('/data/:name/:age/:string',(req, res, next) => {
  res.send(`Recvd: ${req.params.name}, ${req.params.age}, and ${req.params.string}`);

})
let ppp='there'
console.log(`Hey now ${ppp}`);//string interpolation
//alternate form to define the routes
router.route('/ops')
    .get((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .patch((req,res,next) => {

    })

//"this is a string".split(" ").reverse().sort().join(" ")

module.exports = router;
