'use strict';
var mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

var Schema = mongoose.Schema;


var employeeSchema = new Schema({
  _id: Number,
  name: String,
  job: String,
  age:Number
});
employeeSchema.plugin(AutoIncrement);
//employeeSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = mongoose.model('employees', employeeSchema);
