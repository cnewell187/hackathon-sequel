module.exports = function(app){
app.get('/', function(req,res){
  console.log("Boop!")
  res.send("Yo");
})
  app.post('/attendance', function(req, res){
    console.log(req.body);
    res.send("Money No Change");
  })
}
