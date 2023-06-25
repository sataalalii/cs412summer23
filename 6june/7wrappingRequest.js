const https = require('https');

const options = {
    hostname: 'postman-echo.com',
    path: '/get?test=123',
    method: 'GET',
};

async function getRequest(options) {
    return new Promise((resolve, reject) => { // wrapping old code in Promise
        const req = https.request(options, res => {
            let data = '';

            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', error => {
            reject(error);
        });

        req.end();
    });
}

async function callAPI() {
    try {
        const response = await getRequest(options); // await keyword is like a direct resolve instead of .then()
        console.log(response);
    } catch (error) {
        console.error('Error:', error);
    }
}

callAPI();

//The returned Promise is ignored, which is fine. If we are concerned about unhandled
//errors we can add a catch() to the Promise.
