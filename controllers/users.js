var User = require('../models/userModel'); //


function updateStudent(req, res) {
    var timesy = Date.now();


    User.findOneAndUpdate({
        slackName: req.body.user_name
    }, {
        $push: {
            "timestamps": timesy
        }
    }, {
        new: true
    }, function(err, userDoc) {
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
    User.findOne({
        slackName: req.body.user_name
    }, function(err, doc) {
        if (err) {
            console.log(err)
            return res.send(err)
        }
        if (!doc) {

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

        else {
            res.send("You have already joined dumb dumb!")
        }
    })
}

function attendanceInfo(req, res) {
    console.log("running attendance Info")
    User.find({}, function(err, data) {
        console.log("the data from att info: ", data)
        var dataToPass = []
        for (var i = 0; i < data.length; i++) {
            var present = false;
            var presentTime = Date.now();
            var timeIndex = data[i].timestamps.length - 1
            console.log("the time index: ", timeIndex)
            var timeDiff = presentTime - data[i].timestamps[timeIndex];
            console.log("The time diff is ", timeDiff)
            if (timeDiff > 43200000) {
                present = false;
            } else {
                present = true;
            }


            var userDataToPass = {
                realName: data[i].realName,
                slackName: data[i].slackName,
                channelName: data[i].channelName,
                here: present
            }
            dataToPass.push(userDataToPass);


        }
        res.send(dataToPass);
    });
}


module.exports = {
    newStudent: newStudent,
    updateStudent: updateStudent,
    attendanceInfo: attendanceInfo

}
