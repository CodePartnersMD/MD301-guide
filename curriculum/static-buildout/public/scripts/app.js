'use strict';

$('#the-form').on('submit', fetchCityData);

let tempData;

function fetchCityData(event) {
  event.preventDefault();
  let data = $('#input-search').val();
  $.get('/test', {data: data})
    .then(response => {
      // console.log(response);
      tempData = response;
      fillIn(response);
      $('img').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${response.lat}%2c%20${response.lon}&zoom=13&size=600x300&maptype=roadmap
    &key=${response.mapKey}`)
    })
}

function fillIn(obj) {
  $('.query-placeholder').text(`Here are the results for ${obj.searchQuery}`);

  compileTemplate(obj.daySummary, 'weather-results', 'weather-results-template');
  compileTemplate(obj.daySummary, 'yelp-results', 'yelp-results-template');
  compileTemplate(obj.daySummary, 'meetup-results', 'meetup-results-template');
  compileTemplate(obj.daySummary, 'movie-results', 'movie-results-template');
  compileTemplate(obj.daySummary, 'trails-results', 'trails-results-template');
}

function compileTemplate(inputArray, sectionClass, templateId) {
  let template = Handlebars.compile($(`#${templateId}`).text());
  
  inputArray.forEach(element => {
    
    $(`.${sectionClass}`).append(template(element));
  }) 
}
