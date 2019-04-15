var express = require('express')

var app = express()

var bodyParser = require('body-parser');

var mustacheExpress = require('mustache-express');


// app.use(express.urlencoded())
app.use(bodyParser.urlencoded({
  extended: true
}))
// Register '.mustache'
// extension with The Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {

  // res.send(insult)

  res.render('input', {
    // template_name: req.query.input_name
  })
})
//
//
// app.get('/brandInput?input_name=:name', function(req, res) {
//   let insults = [
//     'What a suck brand...',
//     'I have no idea about it',
//     'Oh... Nice...'
//   ]
//   res.render(req.params.name)
// })


app.get('/submit-form', (req, res) => {
  const username = req.body.username
  //...
  // console.log(req.body);

  function getRandNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  // console.log(getRandNum(3))

  let insult = getRandNum(3)

  let insults = [
    'What a suck brand...',
    'I have no idea about it',
    'Oh... Nice...'
  ]

  res.send(insults[insult])
  res.end()
})


app.listen(8000, function() {
  console.log('Web Server Started at port 8000')
})