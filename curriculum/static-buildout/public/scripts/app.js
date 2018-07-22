'use strict';

$('#the-form').on('submit', fetchWeather);


function fetchWeather(event) {
  event.preventDefault();
  let data = $('#input-search').val();
  $.get('/test', {data: data})
    .then(response => $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${response.lat}%2c%20${response.lon}&zoom=13&size=600x300&maptype=roadmap
    &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`))
}
