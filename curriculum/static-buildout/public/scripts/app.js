'use strict';

$('#the-form').on('submit', fetchCityData);

function fetchCityData(event) {
  event.preventDefault();
  let searchQuery = $('#input-search').val();

  $.get('/location', {data: searchQuery})
    .then(location => {
      console.log(location);
      getWeather(location);
      getMovies(location);
      getYelp(location);
      getMeetups(location);
      getTrails(location);
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function getWeather(location) {
  $.get('/weather', {data: location})
    .then(result => {
      compileTemplate(result, 'weather-results', 'weather-results-template');
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function getMovies(location) {
  $.get('/movies', {data: location})
    .then(result => {
      // TODO: add conditional
      compileTemplate(result, 'movie-results', 'movie-results-template');
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function getYelp(location) {
  $.get('/yelp', {data: location})
    .then(result => {
      compileTemplate(result, 'yelp-results', 'yelp-results-template');
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function getMeetups(location) {
  $.get('/meetups', {data: location})
    .then(result => {
      compileTemplate(result, 'meetup-results', 'meetup-results-template');
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function getTrails(location) {
  $.get('/trails', {data: location})
    .then(result => {
      compileTemplate(result, 'trails-results', 'trails-results-template');
    })
    .catch(error => compileTemplate([error], 'error-container', 'error-template'));
}

function fillIn(obj) {
  $('.query-placeholder').text(`Here are the results for ${obj.searchQuery}`);
  
  $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${obj.lat}%2c%20${obj.lon}&zoom=13&size=600x300&maptype=roadmap
  &key=${obj.mapKey}`)

  
  compileTemplate(obj.trailsArray, 'trails-results', 'trails-results-template');
}

function compileTemplate(inputArray, sectionClass, templateId) {
  $(`.${sectionClass}`).empty();
  
  let template = Handlebars.compile($(`#${templateId}`).text());

  inputArray.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  })
}
