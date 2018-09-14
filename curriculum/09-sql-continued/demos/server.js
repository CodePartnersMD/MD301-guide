// Clear the results for a location if they are stale
function deleteByLocationId(table, city) {
  const SQL = `DELETE from ${table} WHERE location_id=${city};`;
  return client.query(SQL);
}

// Each model will need a way to track when the record was added to the database
// Add the created_at property to the model
// This can also be accomplished with a timestamp in SQL
function Weather(day) {
  this.tableName = 'weathers';
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
  this.created_at = Date.now();
}

Weather.tableName = 'weathers';
Weather.lookup = lookup;
// All models can share the dynamic detelByLocationId function
Weather.deleteByLocationId = deleteByLocationId;

// Add this.created_at to the INSERT statement
// Students will also need to update their schema.sql to include this new property
// Remind students to drop the tables and re-create them when modifying the schema or statements
Weather.prototype = {
  save: function(location_id) {
    const SQL = `INSERT INTO ${this.tableName} (forecast, time, created_at location_id) VALUES ($1, $2, $3);`;
    const values = [this.forecast, this.time, this.created_at, location_id];

    client.query(SQL, values);
  }
}

function getWeather(request, response) {
  Weather.lookup({
    tableName: Weather.tableName,

    location: request.query.data.id,

    // Update the cacheHit method to check the creation time and determine if the records should be used or replaced with more recent API results
    cacheHit: function(result) {
      // Date.now() returns the time in milliseconds since January 1, 1970 00:00:00 UTC.
      // Dividing by 1000 converts the time from milliseconds to seconds
      // Dividing by 60 converts the time from seconds to minutes
      // Mention that they will need additional calculations to convert the difference to hours, days, months, etc.
      let ageOfResultsInMinutes = (Date.now() - result.rows[0].created_at) / (1000 * 60);
      if(ageOfResultsInMinutes > 30) {
        // Clear the records for just this query, using the function from above
        Weather.deleteByLocationId(Weather.tableName, request.query.data.id);
        // Request fresh data from the API
        this.cacheMiss();
      } else {
        response.send(result.rows);
      }
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
