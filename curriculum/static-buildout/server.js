'use strict';

// Application Dependencies
const express = require('express');
const superagent = require('superagent');
const pg = require('pg');

// Application Setup
const app = express();
const PORT = 3000;

// Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// API keys
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const YELP_API_KEY = process.env.YELP_API_KEY;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
const MEETUP_API_KEY = process.env.MEETUP_API_KEY;
const TRAIL_API_KEY = process.env.TRAIL_API_KEY;

app.use(express.static('./public'));

// WITHOUT DATABASE - Labs 6 and 7
// app.get('/location', (request, response) => {
//   stringToLatLong(request.query.data)
//     .then(location => response.send(location))
//     .catch(error => handleError(error, response));
// })

// WITH DATABASE - Labs 8 and 9
app.get('/location', (request, response) => {
  let SQL = `SELECT * FROM locations WHERE search_query=$1;`;
  let values = [request.query.data];

  return client.query(SQL, values)
    .then(result => {
      if(result.rowCount === 1) {
        response.send(result.rows[0]);
      } else {
        stringToLatLong(request.query.data)
          .then(location => {
            let SQL = `INSERT INTO locations (search_query, formatted_query, latitude, longitude) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING;`;
            let values = [location.search_query, location.formatted_query, location.latitude, location.longitude];

            client.query(SQL, values);

            response.send(location);
          })
          .catch(error => handleError(error, response));
      }
    })
    .catch(error => handleError(error, response));
})

app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('/yelp', getYelp);
app.get('/meetups', getMeetups);
app.get('/trails', getTrails);

createTables();

// Make sure the server is listening for requests
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Helper Functions
function stringToLatLong(query) {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_API_KEY}`;

  return superagent.get(url)
    .then(res => {
      let formattedQuery = formatQuery(res.body.results[0].address_components);
      return {
        search_query: query,
        formatted_query: formattedQuery,
        latitude: res.body.results[0].geometry.location.lat,
        longitude: res.body.results[0].geometry.location.lng
      }
    })
    .catch(error => handleError(error));
}

// WITHOUT DATABASE - Labs 6 and 7
// forEach in lab 6, then refactor to .map in lab 7
// function getWeather(request, response) {
//   parseLatLong(request);

//   let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

//   return superagent.get(url)
//     .then(result => {
//       let weatherSummaries = result.body.daily.data.map(day => {
//         return {
//           forecast: day.summary,
//           time: new Date(day.time * 1000).toString().slice(0, 15)
//         }
//       });

//       response.send(weatherSummaries);
//     })
//     .catch(error => handleError(error, response));
// }

// WITH DATABASE - Labs 8 and 9
function getWeather(request, response) {
  let SQL = `SELECT * FROM weathers WHERE location_id=$1;`;
  let values = [request.query.data.id];

  let url = `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${request.query.data.latitude},${request.query.data.longitude}`;

  return client.query(SQL, values)
    .then(result => {
      if(result.rowCount > 0) {
        response.send(result.rows);
      } else {
        return superagent.get(url)
          .then(result => {

            let weatherSummaries = result.body.daily.data.map(day => {
              return {
                forecast: day.summary,
                time: new Date(day.time * 1000).toString().slice(0, 15)
              }
            });

            weatherSummaries.forEach(day => {
              let SQL = `INSERT INTO weathers (forecast, time, location_id) VALUES ($1, $2, $3);`;
              let values = [day.forecast, day.time, request.query.data.id];
  
              client.query(SQL, values);
            });
      
            response.send(weatherSummaries);
          })
          .catch(error => handleError(error, response));

      }
    })
    .catch(error => handleError(error, response));
}

// WITHOUT DATABASE - Labs 6 and 7
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

// // WITH DATABASE - Labs 8 and 9
// function getYelp(request, response) {
//   let url = `https://api.yelp.com/v3/businesses/search?location=${request.query.data.search_query}`;

//   return superagent.get(url)
//     .set('Authorization', `Bearer ${YELP_API_KEY}`)
//     .then(response => {
//       return response.body.businesses.map(business => {
//         return {
//           name: business.name,
//           image_url: business.image_url,
//           price: business.price,
//           rating: business.rating,
//           url: business.url
//         };
//       })
//     })
//     .then(arr => {
//       persistYelp(arr);
//       response.send(arr);
//     })
//     .catch(error => handleError(error, response));
// }

// // WITH DATABASE - Labs 8 and 9
// function persistYelp(arr) {
//   arr.forEach(business => {
//     let SQL = `INSERT INTO search_history (name, image_url, price, rating, url) VALUES ($1, $2, $3, $4, $5);`;
//     let values = [business.name, business.image_url, business.price, business.rating, business.url];
//     client.query(SQL, values)
//       .catch(error => handleError(error));
//   })
// }

function getMovies(request, response) {
  let url = `https://api.themoviedb.org/3/search/movie/?api_key=${MOVIE_API_KEY}&language=en-US&page=1&query=${request.query.data.search_query}`;

  return superagent.get(url)
    .then(result => {
      let movieSummaries = result.body.results.map(movie => {
        return {
          title: movie.title,
          overview: movie.overview,
          average_votes: movie.vote_average,
          total_votes: movie.vote_count,
          image_url: 'https://image.tmdb.org/t/p/w200_and_h300_bestv2' + movie.poster_path,
          popularity: movie.popularity,
          released_on: movie.release_date
        };
      })

      response.send(movieSummaries);
    })
    .catch(error => handleError(error, response));
}

function getMeetups(request, response) {
  parseLatLong(request);

  let url = `https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&lon=${request.query.data.longitude}&page=20&lat=${request.query.data.latitude}&key=${MEETUP_API_KEY}`

  return superagent.get(url)
    .then(result => {
      let meetups = result.body.events.map(meetup => {
        return {
          link: meetup.link,
          name: meetup.group.name,
          creation_date: new Date(meetup.group.created).toString().slice(0, 15),
          host: meetup.group.who
        };
      })

      response.send(meetups);
    })
    .catch(error => handleError(error, response));
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
          star_votes: trail.starVotes,
          summary: trail.summary,
          trail_url: trail.url,
          conditions: trail.conditionDetails,
          condition_date: trail.conditionDate.slice(0, 10),
          condition_time: trail.conditionDate.slice(12)
        };
      })
    })
    .then(arr => response.send(arr))
    .catch(error => handleError(error, response));
}

function handleError(err, res) {
  console.error(err);
  if (res) res.status(500).send('Sorry, something went wrong');
}

function parseLatLong(location) {
  location.query.data.latitude = parseFloat(location.query.data.latitude);
  location.query.data.longitude = parseFloat(location.query.data.longitude);
}

function formatQuery(searchDetails) {
  let formattedQuery = '';

  for(let i in searchDetails) {
    if (searchDetails[i].types.includes('street_number')) formattedQuery += searchDetails[i].long_name += ' ';

    if (searchDetails[i].types.includes('route')) formattedQuery += searchDetails[i].long_name += ', ';

    if (searchDetails[i].types.includes('locality')) formattedQuery += searchDetails[i].long_name += ', ';

    if (searchDetails[i].types.includes('administrative_area_level_1')) formattedQuery += searchDetails[i].long_name += ', ';

    if (searchDetails[i].types.includes('country')) formattedQuery += searchDetails[i].long_name += ', ';

    if (searchDetails[i].types.includes('postal_code')) formattedQuery += searchDetails[i].long_name+= ', ';
  }

  return formattedQuery.slice(0, -2);
}

function createTables() {
  createLocations();
  createWeathers();
  createYelps();
  createMovies();
  createMeetups();
  createTrails();
}

function createLocations() {
  let SQL = `CREATE TABLE IF NOT EXISTS locations ( 
    id SERIAL PRIMARY KEY, 
    search_query VARCHAR(255), 
    formatted_query VARCHAR(255), 
    latitude NUMERIC(8, 6), 
    longitude NUMERIC(9, 6) 
  );`;

  client.query(SQL)
    .catch(console.error);
}

function createWeathers() {
  let SQL = `CREATE TABLE IF NOT EXISTS weathers ( 
    weather_id SERIAL PRIMARY KEY, 
    forecast VARCHAR(255), 
    time VARCHAR(255), 
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );`;

  client.query(SQL)
    .catch(console.error);
}

function createYelps() {
  let SQL = `CREATE TABLE IF NOT EXISTS yelps (
    yelp_id SERIAL PRIMARY KEY, 
    name VARCHAR(255), 
    image_url VARCHAR(255), 
    price CHAR(5), 
    rating NUMERIC(1,1), 
    url VARCHAR(255), 
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );`;

  client.query(SQL)
    .catch(console.error);
}
function createMovies() {
  let SQL = `CREATE TABLE IF NOT EXISTS movies ( 
    movie_id SERIAL PRIMARY KEY, 
    title VARCHAR(255), 
    overview VARCHAR(1000), 
    average_votes NUMERIC(2,1), 
    total_votes INTEGER, 
    image_url VARCHAR(255), 
    popularity NUMERIC(4,3), 
    released_on CHAR(10), 
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );`;

  client.query(SQL)
    .catch(console.error);
}
function createMeetups() {
  let SQL = `CREATE TABLE IF NOT EXISTS meetups (
    meetup_id SERIAL PRIMARY KEY, 
    link VARCHAR(255), 
    name VARCHAR(255), 
    creation_date CHAR(15), 
    host VARCHAR(255), 
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );`;

  client.query(SQL)
    .catch(console.error);
}
function createTrails() {
  let SQL = `CREATE TABLE IF NOT EXISTS trails ( 
    trail_id SERIAL PRIMARY KEY, 
    name VARCHAR(255), 
    location VARCHAR(255), 
    length NUMERIC(4, 1), 
    stars NUMERIC(2, 1), 
    star_votes INTEGER, 
    summary VARCHAR(255), 
    trail_url VARCHAR(255), 
    conditions VARCHAR(100), 
    condition_date CHAR(10), 
    condition_time CHAR(8), 
    location_id INTEGER NOT NULL REFERENCES locations(id) 
  );`;

  client.query(SQL)
    .catch(console.error);
}
