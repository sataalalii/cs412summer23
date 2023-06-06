const getFetchResult = url => {
    return fetch(url)
        .then(res => res.json());
};

getFetchResult('https://postman-echo.com/get?test=123')
    .then(firstResult => {
        console.log('First API call result:', firstResult);
        return getFetchResult(`https://postman-echo.com/get?test=${firstResult.args.test*2}`);
    })
    .then(secondResult => {
        console.log('Second API call result:', secondResult);
        return getFetchResult(`https://postman-echo.com/get?test=${secondResult.args.test*2}`);
    })
    .then(finalResult => {
        console.log('Final API call result:', finalResult);
    })
    .catch(err => {
        console.error('There was an error:', err);
    });
