var User = require('../models/usersModel'); //

function create(req, res) {

    var newDoc = new User(req.body);

    newDoc.save((err, doc) => {
        if (err) {
            return res.send(err);
        }
        res.send(doc);
    });
}

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


module.exports = {
    create: create,
    get: get,
}
