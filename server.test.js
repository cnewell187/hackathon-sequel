
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes');
    // HTTP = require('http'),
    // HTTPS = require('https'),
    // fs = require('fs'),
    // ports = {
    //     http:  process.env.PORT || 80,      // default HTTP port
    //     https: process.env.PORT_SSL || 443  // defualt HTTPS port
    // },
    // httpsConfig = { // https://nodejs.org/api/https.html
    //      key:  fs.readFileSync('/etc/letsencrypt/live/marte.io/privkey.pem'),
    //      cert: fs.readFileSync('/etc/letsencrypt/live/marte.io/cert.pem')
    // };


    var PORT = process.env.PORT || 4999;

mongoose.connect('mongodb://localhost/hackathon-sequel');

var app = express();

// Middleware

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());

Routes(app);
// app.all('*', ( req, res, next ) => {
//     if( req.protocol === 'http' ) {
//         res.set('X-Forwarded-Proto','https');
//         res.redirect('https://'+ req.headers.host + req.url);
//     } else {
//         next();
//     }
// });



// Routes

app.listen(PORT, (err)=>{
    if(err){
        console.log("error fool");
    }
    console.log("server is up and running on port", PORT);
})

// start an http server listening on the default port
// HTTP.createServer( app ).listen( ports.http );

// start an https server listening on the default port
// we use try/catch in case the https configuration fails
// try {
//     HTTPS.createServer( httpsConfig, app ).listen( ports.https );
// } catch (e) {
//     console.error('Could not HTTPS server:', e);
// }
