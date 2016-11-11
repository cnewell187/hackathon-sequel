var User = require('../models/userModel'); //

// function create(req, res) {
//     var info = {
//         realName: {
//             type: String,
//             required: true
//         },
//         slackName: req.user_name,
//         timestamps: {
//             type: Array,
//             default: []
//         },
//         channelName: req.
//     }
//     var newDoc = new User(info);
//
//     newDoc.save((err, doc) => {
//         if (err) {
//             return res.send(err);
//         }
//         res.send(doc);
//     });
// }

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

function updateUser(req, res) {

    var info = {
        realName: {
            type: String,
            required: true
        },
        slackName: req.user_name,
        timestamps: {
            type: Array,
            default: []
        },
        channelName: req.
    }
    var newDoc = new User(info);

    newDoc.save((err, doc) => {
        if (err) {
            return res.send(err);
        }
        res.send(doc);
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
    newStudent: newStudent
}
