async function fetchData() {
    try {
        const response = await fetch('https://postman-echo.com/get?test=123');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
    }
}

fetchData(); //drops returned promise, ok because we use try/catch
