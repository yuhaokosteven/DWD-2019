var express = require('express')

var app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));


var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {

  if (req.query.url) {
    var newURL = req.query.input_name

    // res.send('Cool brand bro')
    return res.redirect(newURL)
  }
  // res.end()
  res.render('url', {
    // template_name: req.query.input_name
  })


})

app.listen(8000, function() {
  console.log('Web Server Started at port 8000')
})