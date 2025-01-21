// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your application:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Write a table of contents:',
            name: 'table of contents',
        },
        {
            type: 'input',
            message: 'How do you install this application?',
            name: 'instalation',
        },
        {
            type: 'input',
            message: 'What is this application used for?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Which lisence would you like your application to be covered under?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can people contribute to this application?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'How can people execute a test to check functionality of this application?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'Enter your email:',
            name: 'questions',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Successfully create README.md!'));
 };

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
