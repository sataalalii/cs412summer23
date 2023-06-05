var express = require('express');
const http = require("https");
var router = express.Router();
const request = require('request');

/* GET users listing. */
router.get('/callback', function (req, res, next) {
    console.log(`Start`);
// let result = http.get('https://cnn.com') //doesn't wait
    //Callbacks to handle async requests
    request('https://postman-echo.com/get?test=123', '',
        (error, response, body) => { //this is the callback, runs when request is done
            const baz = JSON.parse(body);
            res.send(body);
        }
    )
    console.log(`End`);
});


router.get('/promise', function(req, res, next) {
    return new Promise ((resolve, reject) => {
        request('http://kidpub.com', (err, response, body) => {
            if(response.statusCode == 200) {
                resolve(body);
            }
            else {
                reject('bad call');
            }
        });
    }).then((body) => {
            res.render('index', {title: body})
        },
        (err) => {
            res.render('index', {title: err})
        });
});

})


module.exports = router;
