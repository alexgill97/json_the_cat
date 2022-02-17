const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (err, response, body) => {
    if (err) throw err;

    const data = JSON.parse(body);
   
    const breed = data[0];
    if (breed) {
      return callback(null, breed.description);
    }
    callback('Failed to find breed');
  });
};

module.exports = { fetchBreedDescription };