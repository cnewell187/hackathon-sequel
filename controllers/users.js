var User = require('../models/userModel'); //


function updateStudent(req, res) {
    var timesy= Date.now();
    User.findOne({
        slackName: req.body.user_name
    },{$push:{"timestamps": timesy}} ,{new:true},function(err, userDoc) {
        if (err) {
            return res.send(err);
        }
        if (!userDoc) {
            return res.send('No man its Dave')
        }
        res.send(userDoc);
    });

}

function newStudent(req, res) {
    console.log(req.body)
    var info = {
        realName: req.body.text,
        slackName: req.body.user_name,
        timestamps: [],
        channelName: req.body.channel_name
    }
    var newDoc = new User(info);

    newDoc.save((err, doc) => {
        if (err) {
            return res.send(err);
        }
        res.send(doc);
    });
}


module.exports = {
    newStudent: newStudent,
    updateStudent: updateStudent

}
