const request = require("request");
const breed = process.argv.splice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
request(url, (err, response, body) => {
  if (err) throw err;

  const data = JSON.parse(body);
  const { description } = data[0];
  if (description) {
    console.log(description);
  }

});

