const inquirer = require('inquirer');
var fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const template = require("./src/template.js"); // template.js imports generateHTML function
const { create } = require('domain');

//maybe create a variable to store text to later throw into the template html

const teamArray = []; // to store team, gets passed to buildteam() which renders html

function newTeam()
{
    inquirer.prompt(
    
        [
            {
                type: 'input',
                message: 'What is your name?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'What is your ID?',
                name: 'ID'
            },
            {
                type: 'input',
                message: 'What is your Email?',
                name: 'Email'
            },
            {
                type: 'input',
                message: 'What is your Office number?',
                name: 'officeNumber'
            },
        ]
    )
    .then((answers) => {
        const managerObj = new Manager(
        
        answers.managerName, answers.id, answers.email, answers.officerNumber)

        teamArray.push(managerObj);
        createTeam();
    })
    // createManager(); //called her for testing //for the start
}

function addEngineer() {

    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your ID?',
                name: 'ID'
            },
            {
                type: 'input',
                message: 'What is your Email?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your Github?',
                name: 'github'
            },
        ]
    )
    .then((answers) => {
        const engineerObj = new Engineer(
        
        answers.name, answers.id, answers.email, answers.github)

        teamArray.push(engineerObj);
        employeeMenu();
    })

    function employeeMenu() {
        inquirer.prompt(
            [
                {
                    name: "choices",
                    type: "list",
                    message: "What would you like to add next:",
                    choices: ['Engineer', 'Intern','Build to build team.'],
                },
            ]
        )
        .then((choice)=> {
    
            switch(choice.choices) {
                case "Engineer":
                    addEngineer();
    
                break;
    
                case "Intern":
                    addIntern();
    
                default:
            
                    buildTeam();  
            }
        })
    }
    
}

function addIntern() {

    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your ID?',
                name: 'ID'
            },
            {
                type: 'input',
                message: 'What is your Email?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'What is your School?',
                name: 'school'
            },
        ]
    )
    .then((answers) => {
        const internObj = new Intern(
        
        answers.name, answers.id, answers.email, answers.school)

        teamArray.push(internObj);
        createTeam();
    })
}

function buildTeam(name, id, email, fieldName, fieldContent) { //for creating html page


    // const html = templateGen.generateHTML(teamArray); 
    //templateGen.generateHTML(teamArray);
    console.log(teamArray);
    writeFile('index.html', generateHTML(answers))
}

newTeam(); //start program
