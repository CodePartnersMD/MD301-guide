'use strict';

let __API_URL__;

$('#url-form').on('submit', function(event) {
  event.preventDefault();
  __API_URL__ = $('#back-end-url').val();
  $('#url-form').addClass('hide');
  $('#search-form').removeClass('hide');
});

$('#search-form').on('submit', fetchCityData);

function fetchCityData(event) {
  event.preventDefault();
  let searchQuery = $('#input-search').val();

  $.get('/location', {data: searchQuery})
    .then(location => {
      displayMap(location);
      getResource('weather', location);
      getResource('movies', location);
      getResource('yelp', location);
      getResource('meetups', location);
      getResource('trails', location);
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function displayMap(location) {
  $('.query-placeholder').text(`Here are the results for ${location.formatted_query}`);

  // toggle visibility with addClass/removeClass
  $('#map').removeClass('hide');
  $('section, div').removeClass('hide');

  $('#map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`)
}

function getResource(resource, location) {
  $.get(`/${resource }`, {data: location})
    .then(result => {
      compileTemplate(result, `${resource}-results`, `${resource}-results-template`);
    })
    .catch(error => {
      compileTemplate([error], 'error-container', 'error-template');
    })
}

function compileTemplate(inputArray, sectionClass, templateId) {
  $(`.${sectionClass}`).empty();

  let template = Handlebars.compile($(`#${templateId}`).text());

  inputArray.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  })
}
