var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var episodes = require('./routes/episodes.route');

var port = 3000;

var app = express();
var cors = require('cors');



//Body Parser MW
app.unsubscribe(bodyParser.json());
app.use(express.static(process.cwd()+"/client/dist/Star-Trek/"));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1/episodes',cors(), episodes);

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/client/dist/Star-Trek/index.html")
  });

app.listen(port, function(){
    console.log('Server started on port '+port);
});
