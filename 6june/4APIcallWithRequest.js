const https = require('https');

const options = {
    hostname: 'postman-echo.com',
    port: 443,
    path: '/get?test=123',
    method: 'GET',
};

const req = https.request(options, res => {
    let data = '';
    res.on('data', chunk => { // on "data" command -- pull chunks.
        data += chunk;
    });
    res.on('end', () => { // on "end" command -- parse
        console.log(JSON.parse(data));
    });
});

req.on('error', error => {
    console.error(error);
});

req.end();
