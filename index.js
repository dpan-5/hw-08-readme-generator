const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


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
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log("Successfully wrote to README");
    })
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
        writeToFile("README.md", generateMarkdown(response));
    }).catch(error => {
        console.log(error);
    })

}

// function call to initialize program
init();
