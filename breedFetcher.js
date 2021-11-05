const request = require("request");
let cat = process.argv[2];
//console.log(search);

let url = `https://api.thecatapi.com/v1/breeds/search?q=${cat}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Contenr Error...");
    return;
  }

  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch (error) {
    console.log("Name provided is not there");
  }

});
