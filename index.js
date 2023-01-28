const inquirer = require('inquirer');
var fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const template = require("./src/template"); // template.js imports generateHTML function

const teamArray = []; // to store team, gets passed to buildteam() which renders html

function createManager()
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
    createManager();

    function createTeam()
    {
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
        .then((choice)=>{

            switch(choice.choices)
            {
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

function addEngineer()
{
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
        createTeam();
    })
}

function addIntern()
{
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

function buildTeam(name, id, email, fieldName, fieldContent)
{ 
    //templateGen.generateHTML(teamArray);
    console.log(teamArray);
    writeFile('index.html', generateHTML(answers))
}

// var main = fs.readFileSync('./src/template.html', 'ascii');
// var EmployeeHtml = fs.readFileSync('./src/Employee.txt', 'ascii');

// var employeeList = '';
// var inp;

// async function ask()
// {
//     answers = await inquirer.prompt(Choices);
//     return answers;
// }
//employeeMenu();

// while(true)
// {
    
//     inp = ask().choices;
//     console.log(inp);

//     // if (inp == 'Manager') //manager
//     // {
//     //     inquirer.prompt(Manager).then((answers) => {});
//     // }
//     // else if (inp = 'Engineer') // engineer
//     // {
//     //     inquirer.prompt(Engineer).then((answers) => {});
//     // }
//     // else if (inp = 'Intern') //intern
//     // {
//     //     inquirer.prompt(Intern).then((answers) => {});
//     // }
//     // else if (inp = 'Quit')
//     // {
//     //     break;
//     // }
//     // else 
//     // {
//     //     console.log('Please try again');
//     // }
// }

// console.log(EmployeeHtml);
// main = main.replace('#teamList', employeeList);

// fs.writeFileSync('./dist/temporary.html', main);
