const inquirer = require('inquirer');
var fs = require('fs');

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
// employeeList += buildEmployee('bill', 'idk', 'yep', 'schoool', 'coolschooool');
// employeeList += buildEmployee('bill2', 'idk', 'yep', 'github', 'willcodeforfood');

while(true)
{
    print('would you like to add another employee? if yes, type which type and hit enter/n'
    +'Manager, Engineer, Intern');
    var inp = input();

    if () //manager
    {
        inquirer.prompt(questions).then((answers) => {});
    }
    else if () // engineer
    {
        inquirer.prompt(questions).then((answers) => {});
    }
    else //intern
    {
        inquirer.prompt(questions).then((answers) => {});
    }

}

console.log(EmployeeHtml);
main = main.replace('#teamList', employeeList);

fs.writeFileSync('./dist/temporary.html', main);

