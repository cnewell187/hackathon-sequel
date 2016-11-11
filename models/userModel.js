var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : {type : String, required : true},


    class : {
        type : mongoose.Schema.ObjectId,
        ref  : 'userClass'
    }
});

module.exports = mongoose.model('User', userSchema, 'useres');
