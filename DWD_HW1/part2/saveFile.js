const request = require('request');
const fs = require('fs');
var createHTML = require('create-html')


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
      //console.log(body.title);

      var html = createHTML({
        title: 'CreateHTML file',
        body: body
      })

      fs.writeFile('index.html', html, function(err) {
        if (err) console.log(err)
        console.log('New File')
      })

    });
  }
})