var rootUrl = 'api.openweathermap.org/data/2.5/weather?';
var appID = 'e9870b4ac28af21beddf6357eb1683f5';

var _ = require('lodash');
var kelvinToF = function(kelvin){
  return math.round((kelvin-273.15) * 1.8 + 32) + '˚C'
};


module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}&appid=${appID}`;


  return fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    return {
      city: json.name,
      temperature: kelvinToF(json.main.temp),
      description: _.capitalize(json.weather[0].description)
    }

  });
}
