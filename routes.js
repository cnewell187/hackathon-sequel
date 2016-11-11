module.exports = function(app){

  app.post('/attendance', function(req, res){
    console.log(req.body);
    res.send("Money No Change");
  })
}
