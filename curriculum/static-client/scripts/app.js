'use strict';

function Data(responseObject) {
  Object.keys(responseObject).forEach(key => {
    this[key] = responseObject[key];
  }, this);
}

Data.fetchWeather = () => {
  $.get('/weather')
    .then(results => new Data(results));
};

Data.fetchWeather();
