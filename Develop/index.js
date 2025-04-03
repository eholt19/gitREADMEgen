// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input

const questions = [
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
        message: 'How do you install this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is this application used for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Which license would you like your application to be covered under?',
        name: 'license',
        choices: ['MimeTypeArray', 'Mozilla', 'Apache', 'ISC'],
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
        name: 'link',
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Succressfully created README.md!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log('Initializing the app...');

    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
