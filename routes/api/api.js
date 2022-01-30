var express = require("express");
const Joi = require('joi');
var router = express.Router();
router.use(express.json());

const obj1 = {id:1, name: "Player 1", attack: "none"};
const obj2 = {id:2, name: "Player 2", attack: "none"};

playerArr = [obj1, obj2];

router.get("/attack", function(req, res){
    console.log("request worked")
    res.json([obj1, obj2]);
});


router.get("/attack/:id", function(req, res){
    const player = playerArr.find(c => c.id == parseInt(req.params.id));
    if (!player) res.status(404).send("Not valid");
    res.send(player);
});

router.put('/attack/:id', (req,res) => {
    const player = playerArr.find(c => c.id == parseInt(req.params.id));
    if (!player) res.status(404).send("Not valid");

    const schema = {
        name: Joi.string().required(),
        attack: Joi.string().required()
    }

    const result = Joi.validate(req.body, schema);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    player.name = req.body.name;
    player.attack = req.body.attack;
    res.send(player)

});

router.post('/attack', (req, res) => {

    console.log("made it here");
    const schema = {
        name: Joi.string().required(),
        attack: Joi.string().required(),
    }

    const result = Joi.validate(req.body, schema);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    console.log(req.body);
    console.log(req.body.name);
    const player = {
        id: playerArr.length + 1, 
        name: req.body.name, 
        attack: req.body.attack
    };
    playerArr.push(player);
    res.send(player)
})

module.exports = router;