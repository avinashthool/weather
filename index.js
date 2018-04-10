let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'b92ea3588dbd587c20a17ebba0649555';
let city = argv.c || 'hinganghat';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weatherDtls = JSON.parse(body);
    console.log("It's " + weatherDtls.main.temp + " degree celcius in "+ weatherDtls.name);
    console.log("and " + weatherDtls["weather"][0].description + " in Sky ");
  }
});