'use strict';

const express = require('express');
const superagent = require('superagent');

const app = express();
const PORT = 3000;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MEETUP_API_KEY = process.env.MEETUP_API_KEY;
const YELP_API_KEY = process.env.YELP_API_KEY;
const TRAIL_API_KEY = process.env.TRAIL_API_KEY;
const WALK_SCORE_API_KEY = process.env.WALK_SCORE_API_KEY;
// const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

// const dummyData = 'seattle';
let latitude, longitude;

app.use(express.static('./public'));

// app.get('///',  a, b, c, d, (req, res) => {
  // res.send(data);
// })

Promise.all([getWeather, getMovies, getMeetups, getYelp, getTrails]);

app.get('/test', (request, response) => {
  // console.log(request.query);
  stringToLatLong(request.query.data)
    .then(obj => getWeather(obj.latitude, obj.longitude))
    // .then(data => )
    .then(console.log);
  // getWeather(request, response);
  // response.sendFile('index.html', {root: './public'});
})

app.get('/both', (request, response) => {
  // stringToLatLong(dummyData);
  response.sendFile('index.html', {root: './public'});
})

app.get('/weather', getWeather);

app.get('/movies', getMovies);

app.get('/meetups', getMeetups);

app.get('/yelp', getYelp);

app.get('/trails', getTrails);

app.get('/walk-score', getWalkScore);

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});

function stringToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}`;
  console.log(query);
  return superagent.get(url)
    .then(response => ({
      // console.log('latitude' + latitude + 'longitude' + longitude)
      latitude: response.body.results[0].geometry.location.lat,
      longitude: response.body.results[0].geometry.location.lng
      // console.log('latitude' + latitude + 'longitude' + longitude)
    }))
}

// stringToLatLong(dummyData);

function getWeather (latitude, longitude) {
  // stringToLatLong(request.query);

  let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${latitude},${longitude}`;
  
  return superagent.get(url)
    // .then(response => {
    //   console.log('Summary', response.body.currently.summary);
    //   console.log(response.body.daily.data);
    //   response.body.daily.data.forEach(day => console.log(day.summary));
    // })
    .catch(err => console.error(err))
}

function getMovies(query) {
  let url = `https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&page=1&query=${query}`;

  superagent.get(url)
    .then(response => console.log(response.body.results[0]))
    .catch(err => console.error(err))
}

function getMeetups(request, response, next) {
  let url = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${longitude}&page=20&lat=${latitude}&key=${MEETUP_API_KEY}`

  superagent.get(url)
    .then(response => console.log(response.body.events))
    .then(next)
    .catch(console.error);
}

function getYelp(request, response) {
  let url = `https://api.yelp.com/v3/businesses/search?location=${dummyData}`;

  superagent.get(url)
    .set('Authorization', `Bearer ${YELP_API_KEY}`)
    .then(response => console.log(response.body))
    .catch(console.error);
}

function getTrails(request, response) {
  let url = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=200&key=${TRAIL_API_KEY}`;

  superagent.get(url)
    .then(response => console.log(response.body.trails))
    .catch(console.error);
}

function getWalkScore(request, response) {
  let url = 'http://api.walkscore.com/score?format=json&lat=41.4993&lon=81.6944&transit=1&bike=1&wsapikey=ae0fc1a4fbb0ddf6e884a1b257a3f3bf';
  // let url = `http://api.walkscore.com/score?format=json&lat=${latitude}&${longitude}=-122.3295&transit=1&bike=1&wsapikey=${WALK_SCORE_API_KEY}`;
  
  superagent.get(url)
    .then(response => console.log(response.body))
    .catch(console.error);
}
