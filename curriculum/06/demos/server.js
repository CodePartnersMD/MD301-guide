'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = 3000;

// API keys
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

// API routes
app.get('/location', (request, response) => {
  stringToLatLong(request.query.data)
    .then(location => response.send(location))
    .catch(error => handleError(error, response));
})

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Helper Functions
function stringToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_API_KEY}`;

  return superagent.get(url)
    .then(res => {
      let formattedQuery = formatQuery(res.body.results[0].address_components);
      console.log(formattedQuery);
      
      return {
        search_query: query,
        formatted_query: formattedQuery,
        latitude: res.body.results[0].geometry.location.lat,
        longitude: res.body.results[0].geometry.location.lng
      }
    })
    .catch(error => handleError(error));
}

function getWeather(request, response) {

}

function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}

function formatQuery(searchDetails) {
  let formattedQuery = '';

  for(let i in searchDetails) {

  }

  return formattedQuery;
}
