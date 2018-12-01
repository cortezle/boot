var mongoose = require ('mongoose');
var user = require('../models/User');
var passport = require('passport');
var AuthController = {};


AuthController.home = function(res,req){
    res.render('index',{user: req.user});
};

AuthController.register = function(res,req){
    res.render('register');
};

AuthController.doregister = function(res,req){
    user.register(new user ({email: req.body.username,password:req.body.password}),function(err,user){
        if(err){
            return res.render('register',{user:user})
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect('/');
        });
    });

};

AuthController.login = function(res,req){
    res.render('login');
};

AuthController.dologin = function(res,req,err){
    passport.authenticate('local')(req,res,function(){
        res.redirect('/');
    });
};

AuthController.logout = function(res,req){
    req.logout();
    res.redirect('/');
};

module.exports = AuthController;