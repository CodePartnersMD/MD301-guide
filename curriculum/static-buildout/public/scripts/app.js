'use strict';

$('#the-form').on('submit', fetchWeather);


function fetchWeather(event) {
  event.preventDefault();
  let data = $('#input-search').val();
  $.get('/test', {data: data})
    .then(console.log);
}

// fetchWeather();

