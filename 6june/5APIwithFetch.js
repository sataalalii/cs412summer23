const requestOptions = {
    method: 'GET'
};

fetch("https://postman-echo.com/get?test=123", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));