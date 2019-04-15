var express = require('express')

var app = express()


var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  function getRandNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  // console.log(getRandNum(3))

  let insults = [
    'What a suck brand...',
    'I have no idea about it',
    'Oh... Nice...'
  ]
  let insult = getRandNum(3)

  // res.send(insults[insult])


  res.render('input', {
    // template_name: req.query.input_name
  })
})

app.listen(8000, function() {
  console.log('Web Server Started at port 8000')
})