// Move the process.argv related code into index.js.

let breedName = process.argv[2];

// index.js
const { fetchBreedDescription } = require('./breedFetcher');


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});