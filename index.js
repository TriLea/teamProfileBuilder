const inquirer = require('inquirer');
var fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const templateGen = require("./src/template"); // template.js imports generateHTML function
//const { create } = require('domain'); //whats this?

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

    function employeeMenu() { // employeeMenu(); is here because every team will have a manager
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
                
                break;
    
                default:
            
                    buildTeam();  
            }
        })
    }
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

function buildTeam(teamArray) { //for creating html page

    //const templateGen = new templateGen(teamArray); //should templategen contructor takes in teamArray?
    const templateGen = new templateGen();
    templateGen.generateHTML(teamArray); //alternative
    console.log(teamArray);
    writeFile('index.html', generateHTML(answers))
}

newTeam(); //start program
