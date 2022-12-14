const inquirer = require('inquirer');
var fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

// const Choices = 
// [
//     {
//         name: "choices",
//         type: "list",
//         message: "What would you like to add next:",
//         choices: ['Manager', 'Engineer', 'Intern','Quit to Quit.'],
//     },
// ]

function employeeMenu()
{
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
        .then((answers)=>{
            const managerObj = new Manager(
            
            answers.managerName, answers.id, answers.email, answers.officerNumber)

            teamArray.push(managerObj);
            createTeam();
        })

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
        //creaete engineer function
        //creaete Intern function
    }
}

// const ManagerQuestions = [
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is your ID?',
//         name: 'ID'
//     },
//     {
//         type: 'input',
//         message: 'What is your Email?',
//         name: 'name'
//     },
// ]

// Engineer = [
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is your ID?',
//         name: 'ID'
//     },
//     {
//         type: 'input',
//         message: 'What is your Email?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is your Github?',
//         name: 'github'
//     },
// ]

// Intern = [
//     {
//         type: 'input',
//         message: 'What is your name?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is your ID?',
//         name: 'ID'
//     },
//     {
//         type: 'input',
//         message: 'What is your Email?',
//         name: 'name'
//     },
//     {
//         type: 'input',
//         message: 'What is your school?',
//         name: 'school'
//     },
// ]

function buildTeam(name, id, email, fieldName, fieldContent)
{ 
    createManager();
    // var html = EmployeeHtml.replace('#Name', name);
    // html = html.replace('#ID', id);
    // html = html.replaceAll('#Email', email);
    // html = html.replace('#FieldName', fieldName);
    // html = html.replace('#FieldContent', fieldContent);

    // return html;
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
employeeMenu();

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
