var User = require('../models/userModel'); //

function get(req, res) {
    // get One
    if (req.params.id) {
        User.findOne({
            _id: req.params.id
        }, (err, document) => {
            if (err) {
                // if(err.name === "CastError" && err.kind === "ObjectId"){
                //     return res.send(`That ain't no ID`)
                // }

                return res.send(err);
            }
            if (!document) {
                return res.send('No one with that id')
            }
            res.send(document);
        });
    }
    // get Many
    else {
        User
            .find({})
            // .sort()
            // .limit()
            .populate('headquarter')
            .exec((err, documents) => {
                if (err) {
                    return res.send(err);
                }
                res.send(documents);
            })
    }
}

function updateStudent(req, res) {

    User.findOne({
        slackName: req.body.user_name
    }, function(err, userDoc) {
        if (err) {
            return res.send("Daves not here man");
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
