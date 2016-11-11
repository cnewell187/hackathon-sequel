
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    HTTP = require('http'),
    HTTPS = require('https'),
    ports = {
        http:  process.env.PORT || 80,      // default HTTP port
        https: process.env.PORT_SSL || 443  // defualt HTTPS port
    },
    httpsConfig = { // https://nodejs.org/api/https.html
         key:  fs.readFileSync('/etc/letsencrypt/live/marte.io/privkey.pem'),
         cert: fs.readFileSync('/etc/letsencrypt/live/marte.io/cert.pem')
    };

mongoose.connect('mongodb://localhost/hackathon-sequel');

var app = express();

// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());



// Routes
Routes(app);

app.listen(3000, ()=>{
    console.log('Server is running!')
});
