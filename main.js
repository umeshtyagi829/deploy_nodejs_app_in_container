var express = require('express')    //Load express module with `require` directive
var app = express() 
 
//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello  World form Nodejs! "second commit"')
})
 
 
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
