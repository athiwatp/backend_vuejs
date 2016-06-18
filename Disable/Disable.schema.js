var modelName = 'Diable'
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schema = new Schema({
  name: String,
  surname: String,
  gender: String,
  age: Number,
  e_mail: String,
  tel: String,
  date: {type: Date, default: Date.now},
  distance_runner: Number,
  pic: {data: Buffer, contentType: String},
  description: String
})
module.exports = mongoose.model(modelName, schema)
