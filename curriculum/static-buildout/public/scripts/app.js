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
      console.log(result);
      compileTemplate(result, 'movie-results', 'movie-results-template');
    })
    .catch(error => compileTemplate(error, 'error-container', 'error-template'));
}

function fillIn(obj) {
  $('.query-placeholder').text(`Here are the results for ${obj.searchQuery}`);
  
  $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${obj.lat}%2c%20${obj.lon}&zoom=13&size=600x300&maptype=roadmap
  &key=${obj.mapKey}`)

  
  compileTemplate(obj.yelpArray, 'yelp-results', 'yelp-results-template');
  compileTemplate(obj.meetupArray, 'meetup-results', 'meetup-results-template');
  compileTemplate(obj.trailsArray, 'trails-results', 'trails-results-template');
}

function compileTemplate(inputArray, sectionClass, templateId) {
  $(`.${sectionClass}`).empty();
  
  let template = Handlebars.compile($(`#${templateId}`).text());

  inputArray.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  })
}
