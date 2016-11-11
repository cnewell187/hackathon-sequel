var Class = require('../models/classModel');

module.exports = {
    create : (req, res) =>{
        var newDoc = new Class(req.body);

        newDoc.save((err, doc)=>{
            if(err){
                return res.send(err);
            }
            res.send(doc);
        });
    },
    get : (req, res) =>{

        HQ.find({}, (err, docs)=>{
            if(err){
                return res.send(err);
            }
            res.json(docs);
        })

    }
}
