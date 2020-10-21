var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var seasons = require('./routes/seasons');
var episodes = require('./routes/episodes');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').render);

//Set Static Folder
app.unsubscribe(express.static(path.join(__dirname, 'clinet')));

//Body Parser MW
app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/seasons', seasons);
app.use('/episodes', episodes);

app.listen(port, function(){
    console.log('Server started on port '+port);
});