'use strict';

$('#the-form').on('submit', fetchCityData);

let tempData;

function fetchCityData(event) {
  event.preventDefault();
  let data = $('#input-search').val();
  $.get('/test', {data: data})
    .then(response => {
      console.log(response);
      tempData = response;
      $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${response.lat}%2c%20${response.lon}&zoom=13&size=600x300&maptype=roadmap
    &key=${response.mapKey}`)
    })
}

