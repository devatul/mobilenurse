var path = require('path');

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/admins", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/signin_admin.html"));
    });



};