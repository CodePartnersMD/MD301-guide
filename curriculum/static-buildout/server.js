'use strict';

const express = require('express');
const superagent = require('superagent');

const app = express();

const PORT = 3000;

// API keys
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MEETUP_API_KEY = process.env.MEETUP_API_KEY;
const YELP_API_KEY = process.env.YELP_API_KEY;
const TRAIL_API_KEY = process.env.TRAIL_API_KEY;
const GOOGLE_MAP_KEY = process.env.GOOGLE_MAP_KEY;
// const WALK_SCORE_API_KEY = process.env.WALK_SCORE_API_KEY;

// const dummyData = 'seattle';

app.use(express.static('./public'));

// app.get('///',  a, b, c, d, (req, res) => {
// res.send(data);
// })

// app.get('/walk-score', getWalkScore);

app.get('/location', (request, response)=>{
  stringToLatLong(request.query.data)
    .then(location => location)
    .catch(err => {
      console.error(err);
      response.status(500).send('Sorry, something went wrong');
    });
})

app.get('/test', (request, response) => {
  let responseObj = {
    mapKey: GOOGLE_MAP_KEY,
    searchQuery: request.query.data.charAt(0).toUpperCase() + request.query.data.slice(1),
    daySummary: [],
    movieArray: [],
    meetupArray: [],
    yelpArray: [],
    trailsArray: []
  };

  stringToLatLong(request.query.data)
    .then(obj => {
      responseObj.lat = obj.latitude;
      responseObj.lon = obj.longitude;
    })
    .then(() => Promise.all([
      getWeather(responseObj),
      getMovies(request.query.data, responseObj),
      getMeetups(responseObj),
      getYelp(request.query.data, responseObj),
      getTrails(responseObj)
    ]))
    .then(() => {
      response.send(responseObj);
    })
    .catch(console.error)
})

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});

// Helper Functions
function stringToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}`;
  console.log(query);

  return superagent.get(url)
    .then(res => {
      console.log(res);
      return ({
        latitude: res.body.results[0].geometry.location.lat,
        longitude: res.body.results[0].geometry.location.lng
      })
    })
    .catch(console.error)
}

function getWeather(obj) {
  let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${obj.lat},${obj.lon}`;

  return superagent.get(url)
    .then(response => {
      response.body.daily.data.forEach(day => {
        let resObj = {
          summary: day.summary,
          time: new Date(day.time * 1000).toString().slice(0, 15)
        };
        obj.daySummary.push(resObj);
      })
    })
    .catch(err => console.error(err))
}

function getMovies(query, obj) {
  let url = `https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&page=1&query=${query}`;

  return superagent.get(url)
    .then(response => {
      response.body.results.forEach(movie => {
        let resObj = {
          title: movie.title,
          overview: movie.overview,
          averageVotes: movie.vote_average,
          totalVotes: movie.vote_count,
          image: 'https://image.tmdb.org/t/p/w200_and_h300_bestv2' + movie.poster_path,
          popularity: movie.popularity,
          releasedOn: movie.release_date
        };
        obj.movieArray.push(resObj);
      })
    })
    .catch(err => console.error(err))
}

function getMeetups(obj) {
  let url = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${obj.lon}&page=20&lat=${obj.lat}&key=${MEETUP_API_KEY}`

  return superagent.get(url)
    .then(response => {
      response.body.events.forEach(meetup => {
        let resObj = {
          description: meetup.description,
          link: meetup.link,
          name: meetup.group.name,
          creationDate: new Date(meetup.group.created * 1000).toString().slice(0, 15),
          location: meetup.localized_location
        };
        obj.meetupArray.push(resObj);
      })
    })
    .catch(console.error);
}

function getYelp(query, obj) {
  let url = `https://api.yelp.com/v3/businesses/search?location=${query}`;

  return superagent.get(url)
    .set('Authorization', `Bearer ${YELP_API_KEY}`)
    .then(response => {
      response.body.businesses.forEach(business => {
        let resObj = {
          name: business.name,
          image_url: business.image_url,
          categories: business.categories,
          price: business.price,
          rating: business.rating,
          url: business.url
        };
        obj.yelpArray.push(resObj);
      })
    })
    .catch(console.error);
}

function getTrails(obj) {
  let url = `https://www.hikingproject.com/data/get-trails?lat=${obj.lat}&lon=${obj.lon}&maxDistance=200&key=${TRAIL_API_KEY}`;

  return superagent.get(url)
    .then(response => {
      response.body.trails.forEach(trail => {
        let resObj = {
          name: trail.name,
          location: trail.location,
          length: trail.length,
          stars: trail.stars,
          starVotes: trail.starVotes,
          summary: trail.summary,
          url: trail.url,
          conditions: trail.conditionDetails,
          conditionDate: trail.conditionDate.slice(0, 10),
          conditionTime: trail.conditionDate.slice(12)
        };
        obj.trailsArray.push(resObj);
      })
    })
    .catch(console.error);
}

// STILL DECIDING IF THIS WILL BE USED
// function getWalkScore(request, response) {
//   let url = 'http://api.walkscore.com/score?format=json&lat=41.4993&lon=-81.6944&transit=1&bike=1&wsapikey=ae0fc1a4fbb0ddf6e884a1b257a3f3bf';
//   // let url = `http://api.walkscore.com/score?format=json&lat=${latitude}&${longitude}=-122.3295&transit=1&bike=1&wsapikey=${WALK_SCORE_API_KEY}`;

//   superagent.get(url)
//     .then(response => console.log(response.body))
//     .catch(console.error);
// }

// USED FOR TESTING INDIVIDUAL ROUTES AND CALLBACKS
// app.get('/weather', getWeather);

// app.get('/movies', getMovies);

// app.get('/meetups', getMeetups);

// app.get('/yelp', getYelp);

// app.get('/trails', getTrails);

