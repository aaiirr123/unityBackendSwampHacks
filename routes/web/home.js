var express = require('express');
var fetch = require('node-fetch');

var router = express.Router();
router.use(express.json());

attackList = [
  'saber',
  'staff',
  'axe',
  'knife',
  'mace'
];

router.get("/", function (req, res) {
  console.log("Basic view");
  res.render("home/index");
})

router.get("/home", function (req, res) {
  console.log("home view");
  res.render("home/home");
})

router.get("/playerOne", function (req, res) {
  console.log("home view");


  const attackListLeng = attackList.length;

  fourButtons = [];
  while (fourButtons.length < 4) {
    randomNum = Math.floor(Math.random() * attackListLeng);
    if (fourButtons.includes(randomNum)) continue;
    else fourButtons.push(randomNum);
  }

  for (val in fourButtons) {
    console.log(attackList[fourButtons[val]]);
  }
  res.render("playerOne", {
    button1: fourButtons[0],
    button2: fourButtons[1],
    button3: fourButtons[2],
    button4: fourButtons[3],
    atk: "fireee",
    attackList: attackList


  });
})

router.get("/playerTwo", function (req, res) {
  console.log("home view");

  const attackListLeng = attackList.length;

  fourButtons = [];
  while (fourButtons.length < 4) {
    randomNum = Math.floor(Math.random() * attackListLeng);
    if (fourButtons.includes(randomNum)) continue;
    else fourButtons.push(randomNum);
  }

  for (val in fourButtons) {
    console.log(attackList[fourButtons[val]]);
  }
  res.render("playerTwo", {
    button1: fourButtons[0],
    button2: fourButtons[1],
    button3: fourButtons[2],
    button4: fourButtons[3],
    atk: "fireee",
    attackList: attackList


  });
})

router.get("/about", function (req, res) {
  console.log("about view");
  res.render("home/about");
})



module.exports = router;