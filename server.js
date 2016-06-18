var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', (process.env.PORT || 5000))
// connet mongoose
mongoose.connect('mongodb://localhost:27017/DB_run')
// require server
var Disable = require('./Disable/Disable.route.js')
app.use('/api/Disable', Disable)
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
