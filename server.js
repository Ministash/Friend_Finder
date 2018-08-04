var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 9000; 
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require(__dirname + '/routing/apiRoutes.js')(app);  
require(__dirname + '/routing//htmlRoutes.js')(app);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});