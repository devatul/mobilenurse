var path = require('path');
var db = require('../models');

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/signin", function(req,res){
        res.sendFile(path.join(__dirname + "/../public/signin.html"));
    });

    app.get("/admins", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/signin_admin.html"));
    });


    app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/new_user.html"));
    });

    app.get("/profile/",ensureAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/profile/index.html"));
    });

    app.post('/api/posts', ensureAuthenticated, function(req,res) {
        res.json(req.body);
   ///     console.log(req.body);
        db.ReqExams.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            comments: req.body.comments
        });
    });

// need a app.get route for backend

// eveything above this //  

    app.get("*", ensureAuthenticated, function(req,res) {
        res.sendFile(path.join(__dirname + '/../index.html'));
    });





function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else
        res.redirect('/signin');
}

};