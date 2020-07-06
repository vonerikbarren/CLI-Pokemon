// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Prompt Creation 
inquirer
  .prompt([
    // User-Name Input
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },

    {
      type: "list",
      message: "Are you a boy or a girl?",
      choices: ["Boy", "Girl"],
      name: "gender"
    },

    {
      type: "list",
      message: "Are you brand new or are you a seasoned veteran?",
      choices: ["Brand New", "Seasoned Veteran", "Mastered This Game"],
      name: "experience"
    },

    {
      type: "list",
      message: "Do you prefer to start off at a small town, medium city, or large city?",
      choices: ["small town", "medium city", "large city"],
      name: "townSize"
    },

    {
      type: "confirm",
      message: "Okay you just arrived in the city of your choice, can you confirm?",
      name: "confirmLocation"
    },

    {
      type: "input",
      message: "You wake up in your room & notice the clock is wrong, Whats the right time in military time?",
      name: "clock"
    },

    {
      type: "list",
      message: "Okay you left your house and now you are out in some grass, then a random stranger is attacked by a pokemon and needs your help. He additionally asks you to choose out the three pokeballs in his pouch, which pokemon will you choose?",
      choices: ["pikachu", "charmander", "squirtle"],
      name: "pokechoose"
    }




  ]).then(function (user) {

    //if a boy vs if a girl
    if (user.gender === "Boy") {
      console.log("==============================================");
      console.log("")
      console.log("Okay" + " " + user.username);
      console.log("You're choice was" + " " + user.gender);
      console.log("Congratulations on deciding to play this game")
      console.log("")
      console.log("==============================================");
    } else {
      console.log("==============================================");
      console.log("")
      console.log("Okay" + " " + user.username);
      console.log("You're choice was" + " " + user.gender);
      console.log("Congratulations on deciding to play this game")
      console.log("")
      console.log("==============================================");
    }


  })

