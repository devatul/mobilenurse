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

                            //// API ROUTES /////

    app.post('/api/posts', ensureAuthenticated, function(req,res) {
        res.json(req.body);
        db.ReqExams.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            comments: req.body.comments
        });
    });


    app.get('/api/posts', ensureAuthenticated, function (req, res) {
            db.ReqExams.findAll({}).then(function (result) {
                return res.json(result);
            });
        });

//get exam by post id
    app.get('/api/posts/:id', ensureAuthenticated, function (req, res) {
        db.ReqExams.findAll({
            where: {
                id: req.params.id
            }
         }).then(function(result){
             console.log(result);
             return res.json(result);
         });
    });


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