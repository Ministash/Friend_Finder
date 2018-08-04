var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 9000; 

app.use(express.static(__dirname + '/public'));
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require("../Friend_Finder/routing/friends.js")(app);
require("../Friend_Finder/routing/apiRoutes.js")(app);
require("../Friend_Finder/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});