var Users = require('./controllers/users');


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: './public'
        })
    });

    app.post('/attendance' , Users.updateStudent)
    app.post('/newStudent', Users.newStudent)
    app.get('/attendanceInfo', Users.attendanceInfo)


}
