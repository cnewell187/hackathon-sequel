module.exports = function(app){
app.get('/', function(req,res){
  console.log("Boop!")
  res.send("<h1>Yo</h1>");
})
  app.post('/attendance', function(req, res){
    console.log(req.body);
    res.send("Money No Change");
  })
}
