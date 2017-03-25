var db = require('../models');

// ROUTES
module.exports = function(app) {    

// === profile routes === //

// GET route to show profile info and exams
app.get("/profile", ensureAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/profile_test.html"));
     });
}