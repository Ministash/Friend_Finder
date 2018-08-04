var path = require('path');

module.exports = function (app){
    app.get('/survey', function(req, res){
        res.sendFile('survey.html', { root: path.join(__dirname, '../public') });
    });

    app.use('/', function(req, res){
        res.sendFile('home.html', { root: path.join(__dirname, '../public') });
    });
    



}   