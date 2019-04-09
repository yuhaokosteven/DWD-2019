var fs = require('fs')

var INPUT = 'input.txt'
var OUTPUT = 'part-2c.html'

var input = fs.readFileSync(INPUT, 'utf-8')
var lines = input.split('\n')

fs.writeFileSync(OUTPUT, "<html><head></head><body><h1>")


for (var i = 0; i < lines.length; i++) {
  fs.appendFileSync(OUTPUT, '<h1>' + lines[i] + '</h1>')
}

fs.appendFileSync(OUTPUT, '</body></html>')