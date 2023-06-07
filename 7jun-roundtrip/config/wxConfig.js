//https://api.openweathermap.org/data/3.0/onecall?lat=42.4&lon=-71.0&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial


//https://api.openweathermap.org/data/3.0/onecall
// ?lat=42.4
// &lon=-71.0
// &exclude=minutely,hourly,daily,alerts
// &appid=6d13b989d2175d527ad89638956aec97
// &units=imperial

const wxConfig = {
    queryString: '?lat=42.4&lon=-71.0&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial',
    url: 'https://api.openweathermap.org/data/3.0/onecall',
    lat: 42.4,
    lon: -71.0,
    exclude: 'minutely,hourly,daily,alerts',
    appid: '6d13b989d2175d527ad89638956aec97',
    units: 'imperial'
}

module.exports = wxConfig;