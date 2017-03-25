var db = require('../models');

//Require dependencies
var passport = require('passport');
var flash = require('connect-flash');

var User = db.User;

//passport Routes
module.exports = function(app) { 
    //this is the functoin for registering a new User
    app.post('/register',function(req,res) {
        User.register(req.body.username, req.body.password, function(err,account) {
            if (err) {
                console.log(err);
                return res.send(err);           
            }
            res.redirect('/signin');
        });
    });


//this is the functon for authenticating a username
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/profile',
            failureRedirect: 'signin?login=bad'
        }),
        function(req,res) {
            //if this function gets called, authentication was successful, 
            // 'req.user' contains the authenticated user
            res.redirect('/profile/');
         }
    );

    //this is the function for loggin a user out 
    app.get('/logout', function(req,res) {
        req.logout();
        res.redirect('/');
    });

}