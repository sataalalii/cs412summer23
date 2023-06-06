const requestOptions = {
    method: 'GET'
};

fetch("https://postman-echo.com/get?test=123", requestOptions)//does the chunking for you
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); //you should always have a .catch
