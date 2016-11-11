var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    realName : {type : String, required : true},
    slackName: {type : String, required : true},
    timestamps: {type:Array, default: []},
    channelName: {type: String, required: true}    



});

module.exports = mongoose.model('User', userSchema, 'users');
