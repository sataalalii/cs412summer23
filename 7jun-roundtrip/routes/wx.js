const express = require('express');
const router = express.Router();
const wxConfig = require('../config/wxConfig');

//matches http://localhost:3000/wx
//
router.get('/',  async(req, res, next) => {
    //get current weather from openweather.com
    const rawWxInfo = await fetch(wxConfig.url + wxConfig.queryString)
        .then(async response =>  await response.json())
        .then(result => { console.log(result); return result;})
        .then(result => {res.json(result)})
        .catch(error => console.log('error', error));


    //const rawWxInfo = await fetch(wxConfig.url + wxConfig.queryString)
    //const wxInfo = await rawWxInfo.json();
    //res.json(wxInfo);
})

module.exports = router; //the export makes router visible to any file that require()s it

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

// fetch("https://api.openweathermap.org/data/3.0/onecall?lat=42.4&lon=-71.0&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));