var async = require("async");

const getFetchResult = url => {
    return fetch(url)
        .then(res => res.json()); // returning results of .then()
};

// getFetchResult('https://postman-echo.com/get?test=123')
//     .then(firstResult => {
//         console.log('First API call result:', firstResult.args.test);
//         return getFetchResult(`https://postman-echo.com/get?test=${firstResult.args.test*2}`);
//     })
//     .then(secondResult => {
//         console.log('Second API call result:', secondResult.args.test);
//         return getFetchResult(`https://postman-echo.com/get?test=${secondResult.args.test*2}`);
//     })
//     .then(finalResult => {
//         console.log('Final API call result:', finalResult.args.test);
//     })
//     .catch(err => {
//         console.error('There was an error:', err);
//     });

async.waterfall([getFetchResult('https://postman-echo.com/get?test=123'), getFetchResult('https://postman-echo.com/get?test=123'), getFetchResult('https://postman-echo.com/get?test=123')])
    .then(values => console.log(`${values}`), err => console.log(`${err}`)).catch(err => {
    console.error('There was an error:', err);
});
