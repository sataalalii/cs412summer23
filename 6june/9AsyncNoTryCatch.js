async function fetchData() {
        const response = await fetch('https://postman-echo.com/get?test=123');
        const data = await response.json();
        console.table(data.args);
}

fetchData().catch((err) => console.log(`Exception: ${err}`)); // handle rejected case of promises.
