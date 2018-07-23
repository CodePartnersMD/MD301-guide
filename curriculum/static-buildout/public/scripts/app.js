'use strict';

$('#the-form').on('submit', fetchCityData);

function fetchCityData(event) {
  event.preventDefault();
  let data = $('#input-search').val();
  $.get('/test', {data: data})
    .then(response => {
      fillIn(response);

    })
}

function fillIn(obj) {
  $('.query-placeholder').text(`Here are the results for ${obj.searchQuery}`);
  
  $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${obj.lat}%2c%20${obj.lon}&zoom=13&size=600x300&maptype=roadmap
  &key=${obj.mapKey}`)

  compileTemplate(obj.daySummary, 'weather-results', 'weather-results-template');
  compileTemplate(obj.yelpArray, 'yelp-results', 'yelp-results-template');
  compileTemplate(obj.meetupArray, 'meetup-results', 'meetup-results-template');
  compileTemplate(obj.movieArray, 'movie-results', 'movie-results-template');
  compileTemplate(obj.trailsArray, 'trails-results', 'trails-results-template');
}

function compileTemplate(inputArray, sectionClass, templateId) {
  $(`.${sectionClass}`).empty();
  
  let template = Handlebars.compile($(`#${templateId}`).text());

  inputArray.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  })
}
