var express = require('express')

var app = express()

var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(8000, function() {
  console.log('Web Server Started at port 8000')
})