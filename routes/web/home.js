var express = require('express');

var router = express.Router();

router.get("/", function(req,res){
    console.log("Basic view");
    res.render("home/index");
})

router.get("/home", function(req,res){
    console.log("home view");
    res.render("home/home");
})

router.get("/playerOne", function(req,res){
    console.log("home view");
    res.render("player");
})

router.get("/playerTwo", function(req,res){
    console.log("player view");
    res.render("player");
})

router.get("/about", function(req,res){
    console.log("about view");
    res.render("home/about");
})
module.exports = router;