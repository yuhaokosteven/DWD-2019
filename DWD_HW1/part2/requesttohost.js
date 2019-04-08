const request = require('request');


process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
  if (index == 2) { //val = command line from terminal
    request(val, {
      json: true
    }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(body);
    });
  }
})