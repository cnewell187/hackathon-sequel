var User = require('../models/userModel'); //


function updateStudent(req, res) {
    var timesy= Date.now();


    User.findOneAndUpdate({
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
  // User.findOne({slackName:req.body.user_name}, function(err, doc){
  //   if(err){
  //     console.log(err)
  //     return res.send(err)
  //   }
  //   if(!doc){
  //
  //   }
  // })
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

function attendanceInfo(req, res){
  console.log("running attendance Info")
  User.find({}, function(err, data){
    console.log("the data from att info: ",data)
      res.send(data);
    });
}


module.exports = {
    newStudent: newStudent,
    updateStudent: updateStudent,
    attendanceInfo: attendanceInfo

}
