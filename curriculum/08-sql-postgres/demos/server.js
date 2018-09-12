'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
const cors = require('cors');

// Load environment variables from .env file
require('dotenv').config();

// Application Setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Database Setup
// Don't forget to add DATABASE_URL to .env file!
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// API Routes
// Refactor now that we are using a database
// Begin by refactoring this function here, then discuss how to move the logic into a function to make the file easier to read
// See below for the demo code for getLocation
app.get('/location', (request, response) => {
  searchToLatLong(request.query.data)
    .then(location => response.send(location))
    .catch(error => handleError(error, response));
})

// With the refactored function, this is the final route:
app.get('/location', getLocation);

app.get('/weather', getWeather);

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Error handler
function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}
// Models
function Location(query, res) {
  this.tableName = 'locations';
  this.search_query = query;
  this.formatted_query = res.body.result[0].formatted_address;
  this.latitude = res.body.results[0].geometry.location.lat;
  this.longitude = res.body.results[0].geometry.location.lng;
}

function Weather(day) {
  this.tableName = 'weathers';
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
}

// Refactored getLocation function, now that it is so long, pull it out into a function
// Begin with this in the route, then discuss how difficult it is to read such a long function in the route and refactor to a function, as below.
function getLocation(request, response) {
  const SQL = `SELECT * FROM locations WHERE search_query=$1;`;
  const values = [request.query.data];

  return client.query(SQL, values)
    .then(result => {
      if(result.rowCount === 1) {
        response.send(result.rows[0]);
      } else {
        searchToLatLong(request.query.data)
          .then(location => {
            const SQL = `INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING RETURNING id;`;
            const values = [location.search_query, location.formatted_query, location.latitude, location.longitude];

            client.query(SQL, values)
              .then(result => {
                location.id = result.rows[0].id;
                response.send(location);
              })
              .catch(console.error);
          })
          .catch(error => handleError(error, response));
      }
    })
    .catch(error => handleError(error, response));
}

function searchToLatLong(query) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.emitWarning.GEOCODE_API_KEY}`;

  return superagent.get(url)
    .then(res => {
      return new Location(query, res);
    })
    .catch(error => handleError(error));
}

// From class 7 solution code
// Refactor in lecture to the version below, in two parts
// Only refactor getWeather and allow students to follow the pattern to refactor the remaining routes
function getWeather(request, response) {
  const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

  superagent.get(url)
    .then(result => {
      const weatherSummaries = result.body.daily.data.map(day => {
        return new Weather(day);
      });

      response.send(weatherSummaries);
    })
    .catch(error => handleError(error, response));
}

// Refactor, part 1 of 3
Weather.prototype = {
  save: function(location_id) {
    const SQL = `INSERT INTO ${this.tableName} (forecast, time, location_id) VALUES ($1, $2, $3);`;
    const values = [this.forecast, this.time, location_id];

    client.query(SQL, values);
  },
}

// Refactor, part 2 of 3
// Note: is it a stretch goal for class 8 to make a single "lookup" function; see solution code for class 9 which includes this format
Weather.lookup = function(options) {
  const SQL = `SELECT * FROM weathers WHERE location_id=$1;`;
  client.query(SQL, [options.location])
    .then(result => {
      if(result.rowCount > 0) {
        options.cacheHit(result);
      } else {
        options.cacheMiss();
      }
    })
    .catch(error => handleError(error));
}

// Refactor, part 3 of 3
// Now the callback will invoke the .lookup method with three options: the location, the function if the database contains the results, and the API request if the database does not contain the results
function getWeather(request, response) {
  Weather.lookup({
    location: request.query.data.id,

    cacheHit: function(result) {
      response.send(result.rows);
    },

    cacheMiss: function() {
      const url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

      superagent.get(url)
        .then(result => {
          const weatherSummaries = result.body.daily.data.map(day => {
            const summary = new Weather(day);
            summary.save(request.query.data.id);
            return summary;
          });

          response.send(weatherSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}
