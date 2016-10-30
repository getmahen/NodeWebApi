var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    id: Number,
    FirstName: String,
    LastName: String

});

module.exports = mongoose.model('customer', customerSchema);