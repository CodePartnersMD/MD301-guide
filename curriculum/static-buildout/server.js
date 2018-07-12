'use strict';

const express = require('express');
const superagent = require('superagent');

const app = express();
const PORT = 3000;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MEETUP_API_KEY = process.env.MEETUP_API_KEY;
const YELP_API_KEY = process.env.YELP_API_KEY;
// const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

const dummyData = 'seattle';
let latitude, longitude;

app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: './public'});
})

app.get('/both', (request, response) => {
  stringToLatLong(dummyData);
  response.sendFile('index.html', {root: './public'});
})

app.get('/weather', (request, response) => {
  let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${latitude},${longitude}`;
  
  superagent.get(url)
    .then(response => {
      console.log('Summary', response.body.currently.summary);
      // console.log(response.body.daily.data);
      response.body.daily.data.forEach(day => console.log(day.summary));
    })
});

app.get('/movies', (request, response) => {
  let url = `https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&page=1&query=${dummyData}`;

  superagent.get(url)
    .then(response => console.log(response.body.results[0]))
    .catch(err => console.error(err))
});

app.get('/meetups', (request, response) => {
  let url = `https://api.meetup.com/2/cities?&sign=true&photo-host=public&lon=${longitude}&lat=${latitude}&page=20`;
  
  let url2 = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${longitude}&page=20&lat=${latitude}&key=${MEETUP_API_KEY}`
  
  // superagent.get(url)
  //   .then(response => console.log(response.body.results))
  //   .catch(console.error);
    
  superagent.get(url2)
    .then(response => console.log(response.body.events))
    .catch(console.error);
});

app.get('/yelp', (request, response) => {
  let url = `https://api.yelp.com/v3/businesses/search?location=${dummyData}`;
  
  superagent.get(url)
    .set('Authorization', `Bearer ${YELP_API_KEY}`)
    .then(response => console.log(response.body))
    .catch(console.error);
});

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});

function stringToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}`;
  console.log('in');
  return superagent.get(url)
    .then(response => {
      latitude = response.body.results[0].geometry.location.lat;
      longitude = response.body.results[0].geometry.location.lng;
    })
}

stringToLatLong(dummyData);
