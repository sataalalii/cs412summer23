async function fetchData() {
    try {
        const response = await fetch('https://postman-echo.com/get?test=123');
        //const data = await response.json();
        const text = await response.text();
        //console.log(data);
        console.log(`Text: ${text}`);
    } catch (error) {
        console.error('There has been a problem with your fetch operation: ', error);
    }
}

fetchData(); //drops returned promise, ok because we use try/catch
