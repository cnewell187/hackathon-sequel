var Users = require('./controllers/users');
var Classes = require('./controllers/classes');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: './public'
        })
    });


    app.post('/attendance', function(req, res) {
        console.log(req.body);
        res.send("Money No Change");
    })  

    app.post('/newStudent', Users.newStudent)


}
