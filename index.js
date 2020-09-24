const fs = require("fs");
const inquirer = require("inquirer");


// array of questions for user
const questions = [
    "Title of your project: ",
    "Description of your project: ",
    "Installation instructions: ",
    "Usage information: ",
    "Contribution guidelines: ",
    "Test instructions: "
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "test"
        }
    ]).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })

}

// function call to initialize program
init();
