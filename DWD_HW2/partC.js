// HW 2c
var mustacheExpress = require('mustache-express');

var express = require('express')

var request = require('request')

var app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', function(req, res) {
  // console.log()
  if (req.query.input_name) {
    request(req.query.input_name, function(err, response, html) {
      res.send(html)
    })
  } else {
    res.render('url')
  }
})

////get input example

// app.get('/', function(req,res){
//   res.render('inClassinput')
// })


// //mustache example
//
// app.get('/inClassinput', function(req,res){
//
// })

app.listen(8000, function() {
  console.log('Web Server Started at port 8000')
})
