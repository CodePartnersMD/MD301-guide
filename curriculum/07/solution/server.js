'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');

// Application Setup
const app = express();
const PORT = 3000;

// API keys
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const YELP_API_KEY = process.env.YELP_API_KEY;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

// API routes
app.get('/location', (request, response) => {
  stringToLatLong(request.query.data)
    .then(location => response.send(location))
    .catch(error => handleError(error, response));
})

app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('/yelp', getYelp);

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

  return superagent.get(url)
    .then(result => {
      let weatherSummaries = result.body.daily.data.map(day => {
        return {
          forecast: day.summary,
          time: new Date(day.time * 1000).toString().slice(0, 15)
        }
      });

      response.send(weatherSummaries);
    })
    .catch(error => handleError(error, response));
}

function getYelp(request, response) {
  let url = `https://api.yelp.com/v3/businesses/search?location=${request.query.data.search_query}`;

  return superagent.get(url)
    .set('Authorization', `Bearer ${YELP_API_KEY}`)
    .then(result => {
      let yelpSummaries = result.body.businesses.map(business => {
        return {
          name: business.name,
          image_url: business.image_url,
          price: business.price,
          rating: business.rating,
          url: business.url
        };
      })

      response.send(yelpSummaries);
    })
    .catch(error => handleError(error, response));
}

function getMovies(request, response) {
  let url = `https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&page=1&query=${request.query.data.search_query}`;

  return superagent.get(url)
    .then(result => {
      let movieSummaries = result.body.results.map(movie => {
        return {
          title: movie.title,
          overview: movie.overview,
          averageVotes: movie.vote_average,
          totalVotes: movie.vote_count,
          image: 'https://image.tmdb.org/t/p/w200_and_h300_bestv2' + movie.poster_path,
          popularity: movie.popularity,
          releasedOn: movie.release_date
        };
      })

      response.send(movieSummaries);
    })
    .catch(error => handleError(error, response));
}

function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}
