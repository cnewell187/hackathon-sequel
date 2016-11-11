var Users = require('./controllers/users');
var Classes = require('./controllers/classes');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: './public'
        })
    });

    //
    // ─── USER ROUTES ────────────────────────────────────────────────────────────────
    //
    app.post('/api/users', Users.create);
    app.get('/api/users', Users.get);
    app.get('/api/users/:id', Users.get);
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── CLASS ROUTES ──────────────────────────────────────────────────────────────────
    //
    app.post('/api/classes', Classes.create);
    app.get('/api/classes', Classes.get);

    app.post('/attendance', function(req, res) {
        console.log(req.body);
        res.send("Money No Change");
    })



    app.get('/', function(req, res) {
        console.log("Boop!")
        res.send("<h1>Yo</h1>");
    })
    app.post('/attendance', function(req, res) {
        console.log(req.body);
        res.send("Money No Change");
    })

    app.post('/newStudent', function(req, res) {
        console.log(req.body);
        res.send("Congrats You Joined!");
    })

}
