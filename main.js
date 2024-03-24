#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    { message: "Guess the number from 1-5", type: "number", name: "userGuessedNumber" },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("WOW! you won the game");
}
else {
    console.log(`Oh no! you lose the game right number was ${randomNumber}`);
}
