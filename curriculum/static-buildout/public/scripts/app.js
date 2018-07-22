'use strict';

$('#the-form').on('submit', fetchCityData);

function fetchCityData(event) {
  event.preventDefault();
  let data = $('#input-search').val();
  $.get('/test', {data: data})
    .then(response => {
      fillIn(response);
      $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${response.lat}%2c%20${response.lon}&zoom=13&size=600x300&maptype=roadmap
    &key=${response.mapKey}`)
    })
}

// TODO: Determine if this should all be within the .then above, or if everything should stay in this callback, including setting the img src attribute, above
function fillIn(obj) {
  $('.query-placeholder').text(`Here are the results for ${obj.searchQuery}`);

  compileTemplate(obj.daySummary, 'weather-results', 'weather-results-template');
  compileTemplate(obj.yelpArray, 'yelp-results', 'yelp-results-template');
  compileTemplate(obj.meetupArray, 'meetup-results', 'meetup-results-template');
  compileTemplate(obj.movieArray, 'movie-results', 'movie-results-template');
  compileTemplate(obj.trailsArray, 'trails-results', 'trails-results-template');
}

function compileTemplate(inputArray, sectionClass, templateId) {
  let template = Handlebars.compile($(`#${templateId}`).text());

  inputArray.forEach(element => {
    $(`.${sectionClass}`).append(template(element));
  })
}
