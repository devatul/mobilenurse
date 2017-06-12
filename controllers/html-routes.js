var path = require('path');
var db = require('../models');
// Generate a v1 UUID (time-based) 
const uuidV1 = require('uuid/v1');

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
        
        String.prototype.toProperCase = function(){
            return this.toLowerCase().replace(/(^[a-z]| [a-z]|-[a-z])/g, 
                function($1){
                    return $1.toUpperCase();
                }
            );
        };

        var defaultStatus = 'pending'

        res.json(req.body);
        console.log(req.body)
        db.Exams.create({
            firstname: req.body.firstname.toProperCase(),
            lastName: req.body.lastName.toProperCase(),
            clientDOB: req.body.clientDOB,
            clientPhone: req.body.clientPhone,
            examStreetAddress: req.body.examStreetAddress.toProperCase(),
            examCity: req.body.examCity.toProperCase(),
            examState: req.body.examState,
            examZipCode: req.body.examZipCode,
            policyAmount: req.body.policyAmount,
            examDate: req.body.examDate,
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
             console.log(result[0]);
             return res.json(result[0]);
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