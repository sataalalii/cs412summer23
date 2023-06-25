const requestOptions = {
    method: 'GET'
};

fetch("https://postman-echo.com/get?test=123", requestOptions) // on backend same as on frontend.
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); // you should always have a .catch any time using a promise.