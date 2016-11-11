var Users = require('./controllers/users');
var Classes = require('./controllers/classes');

module.exports = (app) =>{

    app.get('/', (req, res)=>{
        res.sendFile('index.html', {root : './public/html'})
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




}
