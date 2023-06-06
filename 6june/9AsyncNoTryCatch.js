async function fetchData() {
        const response = await fetch('https://postman-echo.com/get?test=123');
        const data = await response.json();
        console.log(data);
}

fetchData().catch((err) => console.log(`Exception: ${err}`));
