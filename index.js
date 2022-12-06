const inquirer = require('inquirer');
var fs = require('fs');

const Choices = [
    {
        name: "choices",
        type: "list",
        message: "What would you like to add next:",
        choices: ['Manager', 'Engineer', 'Intern','Quit to Quit.'],
    },
]

const Manager = [
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
]

const Engineer = [
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

const Intern = [
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
        message: 'What is your school?',
        name: 'school'
    },
]

function buildEmployee(name, id, email, fieldName, fieldContent)
{ 
    var html = EmployeeHtml.replace('#Name', name);
    html = html.replace('#ID', id);
    html = html.replaceAll('#Email', email);
    html = html.replace('#FieldName', fieldName);
    html = html.replace('#FieldContent', fieldContent);

    return html;
}

var main = fs.readFileSync('./src/template.html', 'ascii');
var EmployeeHtml = fs.readFileSync('./src/Employee.txt', 'ascii');

var employeeList = '';
var inp;

async function ask()
{
    answers = await inquirer.prompt(Choices);
    return answers;
}

while(true)
{
    
    inp = ask().choices;
    console.log(inp);

    // if (inp == 'Manager') //manager
    // {
    //     inquirer.prompt(Manager).then((answers) => {});
    // }
    // else if (inp = 'Engineer') // engineer
    // {
    //     inquirer.prompt(Engineer).then((answers) => {});
    // }
    // else if (inp = 'Intern') //intern
    // {
    //     inquirer.prompt(Intern).then((answers) => {});
    // }
    // else if (inp = 'Quit')
    // {
    //     break;
    // }
    // else 
    // {
    //     console.log('Please try again');
    // }
}

console.log(EmployeeHtml);
main = main.replace('#teamList', employeeList);

fs.writeFileSync('./dist/temporary.html', main);
