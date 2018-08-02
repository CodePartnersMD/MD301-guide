'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');

// Load environment variables from .env file
require('dotenv').config();

// Application Setup
const app = express();
const PORT = 3000;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// API Routes
app.get('/location', getLocation);
app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('/yelp', getYelp);
app.get('/meetups', getMeetups);

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


// Error handler
function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}

// Look for the results in the database
function lookup(options) {
  let SQL = `SELECT * FROM ${options.tableName} WHERE location_id=$1;`;
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

// Models
function Location(query, res) {
  this.tableName = 'locations';
  this.search_query = query;
  this.formatted_query = res.body.results[0].formatted_address;
  this.latitude = res.body.results[0].geometry.location.lat;
  this.longitude = res.body.results[0].geometry.location.lng;
}

function Weather(day) {
  this.tableName = 'weathers';
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
}

Weather.tableName = 'weathers';
Weather.lookup = lookup;

Weather.prototype = {
  save: function(location_id) {
    let SQL = `INSERT INTO ${this.tableName} (forecast, time, location_id) VALUES ($1, $2, $3);`;
    let values = [this.forecast, this.time, location_id];

    client.query(SQL, values);
  }
}

function Yelp(business) {
  this.tableName = 'yelps';
  this.name = business.name;
  this.image_url = business.image_url;
  this.price = business.price;
  this.rating = business.rating;
  this.url = business.url;
}

Yelp.tableName = 'yelps';
Yelp.lookup = lookup;

Yelp.prototype = {
  save: function(location_id) {
    let SQL = `INSERT INTO ${this.tableName} (name, image_url, price, rating, url, location_id) VALUES ($1, $2, $3, $4, $5, $6);`;
    let values = [this.name, this.image_url, this.price, this.rating, this.url, location_id];

    client.query(SQL, values);
  }
}

function Movie(movie) {
  this.tableName = 'movies';
  this.title = movie.title;
  this.overview = movie.overview;
  this.average_votes = movie.vote_average;
  this.total_votes = movie.vote_count;
  this.image_url = 'https://image.tmdb.org/t/p/w200_and_h300_bestv2' + movie.poster_path;
  this.popularity = movie.popularity;
  this.released_on = movie.release_date;
}

Movie.tableName = 'movies';
Movie.lookup = lookup;

Movie.prototype = {
  save: function(location_id) {
    let SQL = `INSERT INTO ${this.tableName} (title, overview, average_votes, total_votes, image_url, popularity, released_on, location_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    let values = [this.title, this.overview, this.average_votes, this.total_votes, this.image_url, this.popularity, this.released_on, location_id];

    client.query(SQL, values);
  }
}

function Meetup(meetup) {
  this.tableName = 'meetups';
  this.link = meetup.link;
  this.name = meetup.group.name;
  this.creation_date = new Date(meetup.group.created).toString().slice(0, 15);
  this.host = meetup.group.who;
}

Meetup.tableName = 'meetups';
Meetup.lookup = lookup;

Meetup.prototype = {
  save: function(location_id) {
    let SQL = `INSERT INTO ${this.tableName} (link, name, creation_date, host, location_id) VALUES ($1, $2, $3, $4, $5);`;
    let values = [this.link, this.name, this.creation_date, this.host, location_id];

    client.query(SQL, values);
  }
}

function getLocation(request, response) {
  let SQL = `SELECT * FROM locations WHERE search_query=$1;`;
  let values = [request.query.data];

  return client.query(SQL, values)
    .then(result => {
      let location = {};

      if(result.rowCount === 1) {
        location = result.rows[0];
      } else {
        searchToLatLong(request.query.data)
          .then(loc => {
            let SQL = `INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING;`;
            let values = [loc.search_query, loc.formatted_query, loc.latitude, loc.longitude];

            client.query(SQL, values)
              .catch(console.error);

            location = loc;
          })
          .catch(error => handleError(error, response));
      }

      response.send(location);
    })
    .catch(error => handleError(error, response));
}

function searchToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${process.env.GEOCODE_API_KEY}`;

  return superagent.get(url)
    .then(res => {
      return new Location(query, res);
    })
    .catch(error => handleError(error));
}

function getWeather(request, response) {
  Weather.lookup({
    tableName: Weather.tableName,

    location: request.query.data.id,

    cacheHit: function(result) {
      response.send(result.rows);
    },

    cacheMiss: function() {
      let url = `https://api.darksky.net/forecast/${process.env.WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

      superagent.get(url)
        .then(result => {
          let weatherSummaries = result.body.daily.data.map(day => {
            let summary = new Weather(day);
            summary.save(request.query.data.id);
            return summary;
          });
          response.send(weatherSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getYelp(request, response) {
  Yelp.lookup({
    tableName: Yelp.tableName,

    location: request.query.data.id,

    cacheHit: function(result) {
      response.send(result.rows);
    },

    cacheMiss: function() {
      let url = `https://api.yelp.com/v3/businesses/search?location=${request.query.data.search_query}`;

      superagent.get(url)
        .set('Authorization', `Bearer ${process.env.YELP_API_KEY}`)
        .then(result => {
          let yelpSummaries = result.body.businesses.map(business => {
            let review = new Yelp(business);
            review.save(request.query.data.id);
            return review;
          });

          response.send(yelpSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getMovies(request, response) {
  Movie.lookup({
    tableName: Movie.tableName,

    location: request.query.data.id,

    cacheHit: function(result) {
      response.send(result.rows);
    },

    cacheMiss: function() {
      let url = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&query=${request.query.data.search_query}`;

      superagent.get(url)
        .then(result => {
          let movieSummaries = result.body.results.map(movie => {
            let details = new Movie(movie);
            details.save(request.query.data.id);
            return details;
          });

          response.send(movieSummaries);
        })
        .catch(error => handleError(error, response));
    }
  })
}

function getMeetups(request, response) {
  Meetup.lookup({
    tableName: Meetup.tableName,

    location: request.query.data.id,

    cacheHit: function(result) {
      response.send(result.rows);
    },

    cacheMiss: function() {
      let url = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${request.query.data.longitude}&page=20&lat=${request.query.data.latitude}&key=${process.env.MEETUP_API_KEY}`

      superagent.get(url)
        .then(result => {
          let meetups = result.body.events.map(meetup => {
            let event = new Meetup(meetup);
            event.save(request.query.data.id);
            return event;
          });

          response.send(meetups);
        })
        .catch(error => handleError(error, response));
    }
  })
}
