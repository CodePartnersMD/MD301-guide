'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = 3000;

// API keys
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

// API routes
app.get('/location', (request, response) => {
  stringToLatLong(request.query.data)
    .then(location => response.send(location))
    .catch(error => handleError(error, response));
})

app.get('/weather', getWeather);

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Helper Functions
function stringToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_API_KEY}`;

  return superagent.get(url)
    .then(res => {
      return {
        search_query: query.charAt(0).toUpperCase() + query.slice(1),
        latitude: res.body.results[0].geometry.location.lat,
        longitude: res.body.results[0].geometry.location.lng
      }
    })
    .catch(error => handleError(error));
}

function getWeather(request, response) {
  let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;
  console.log('url', url);

  return superagent.get(url)
    .then(result => {
      let weatherSummaries = [];

      result.body.daily.data.forEach(day => {
        let summary =  {
          forecast: day.summary,
          time: new Date(day.time * 1000).toString().slice(0, 15)
        }

        weatherSummaries.push(summary);
      });

      response.send(weatherSummaries);
    })
    .catch(error => handleError(error, response));
}

function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}
