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
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

app.use(express.static('./public'));

app.get('/location', (request, response)=>{
  stringToLatLong(request.query.data)
    .then(location => response.send(location))
    .catch(error => handleError(error, response));
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

app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('/yelp', getYelp);
app.get('/meetups', getMeetups);
app.get('/trails', getTrails);

app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});

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
    .catch(console.error)
}

function getWeather(request, response) {
  parseLatLong(request);
  
  let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;
  return superagent.get(url)
    .then(response => {
      return response.body.daily.data.map(day => {
        return {
          summary: day.summary,
          time: new Date(day.time * 1000).toString().slice(0, 15)
        }
      })
    })
    .then(arr => response.send(arr))
    .catch(err => console.error(err.status))
}

function getMovies(request, response) {
  let url = `https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&page=1&query=${request.query.data.search_query}`;

  return superagent.get(url)
    .then(response => {
      return response.body.results.map(movie => {
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
    })
    .then(arr => response.send(arr))
    .catch(err => console.error(err))
}

function getMeetups(request, response) {
  parseLatLong(request);
  
  let url = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${request.query.data.longitude}&page=20&lat=${request.query.data.latitude}&key=${MEETUP_API_KEY}`

  return superagent.get(url)
    .then(response => {
      return response.body.events.map(meetup => {
        return {
          description: meetup.description,
          link: meetup.link,
          name: meetup.group.name,
          creationDate: new Date(meetup.group.created * 1000).toString().slice(0, 15),
          location: meetup.localized_location
        };
      })
    })
    .then(arr => response.send(arr))
    .catch(console.error);
}

function getYelp(request, response) {
  let url = `https://api.yelp.com/v3/businesses/search?location=${request.query.data.search_query}`;

  return superagent.get(url)
    .set('Authorization', `Bearer ${YELP_API_KEY}`)
    .then(response => {
      return response.body.businesses.map(business => {
        return {
          name: business.name,
          image_url: business.image_url,
          categories: business.categories,
          price: business.price,
          rating: business.rating,
          url: business.url
        };
      })
    })
    .then(arr => response.send(arr))
    .catch(console.error);
}

function getTrails(request, response) {
  parseLatLong(request);
  
  let url = `https://www.hikingproject.com/data/get-trails?lat=${request.query.data.latitude}&lon=${request.query.data.longitude}&maxDistance=200&key=${TRAIL_API_KEY}`;

  return superagent.get(url)
    .then(response => {
      return response.body.trails.map(trail => {
        return {
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
      })
    })
    .then(arr => response.send(arr))
    .catch(console.error);
}

function handleError(err, res) {
  console.error(err);
  res.status(500).send('Sorry, something went wrong');
}

function parseLatLong(location) {
  location.query.data.latitude = parseFloat(location.query.data.latitude);
  location.query.data.longitude = parseFloat(location.query.data.longitude);
}
