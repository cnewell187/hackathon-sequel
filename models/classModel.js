var mongoose = require('mongoose');


var classSchema = mongoose.Schema({
    name : String,

});


module.exports = mongoose.model('userClass', classSchema);
