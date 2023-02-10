const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//const templateGen = require("./src/template"); // template.js imports generateHTML function
//const { create } = require('domain'); //whats this?

const teamArray = []; // to store team, gets passed to buildteam() which renders html

function newTeam()
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
                message: 'What is your email?',
                name: 'email'
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
        
        answers.name, answers.ID, answers.email, answers.officeNumber)

        console.log("managerObj");
        teamArray.push(managerObj);
        console.log(teamArray);
        employeeMenu();
    })
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
                message: 'What is your email?',
                name: 'email'
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
        
        answers.name, answers.ID, answers.email, answers.github)

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
                message: 'What is your email?',
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
        
        answers.name, answers.ID, answers.email, answers.school)

        teamArray.push(internObj);
        employeeMenu();
    })
}

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
            break;

            case "Build to build team.":
                buildTeam(teamArray);
            break;

            default:
                console.log("incorrect input");
        }
    })
}

function buildTeam(paramA1) { //for creating html page

    //const templateGen = new templateGen(teamArray); //should templategen contructor takes in teamArray?
    // console.log(teamArray);
    // const templateGen = new templateGen();
    // var textGenerated = templateGen.generateHTML(teamArray);
    // writeFile('index.html', textGenerated);
    generateHTML(paramA1);
}

newTeam(); //start of program

// template generation section, was its own file but the import was no working
//______________________________________________________________________________________________________________________________________

//generates html template for the buildTeam function
//how to pass team array to this function?
var firsthalf = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="./src/stylesheet.css">
  </head>

  <body>
    <!--whole list of employees gets placed here-->
    <section>`; //will be added at beginning

var secondhalf = `<section>
<!--how do i get the template js to spew html out in here?-->
#teamList
</section>
</body>
</html>`; // will be added at end

let text = firsthalf; //a string to hold the text to be placed in index.html later

function generateHTML(paramA2)
{
  console.log(paramA2);
  console.log("hit generateHTML");
  for (var i = 0; i < paramA2.length; i++) 
  {
    let element = paramA2[i];
  
    console.log(element);
    console.log(element.getRole());
    switch(element.getRole()) 
    {
      case "Manager":
        text += generateHTMLManager(element.name, element.id, element.email, element.officeNumber);
      break;
      
      case "Engineer":
        //text += generateHTMLEngineer(element);
      break;

      case "Intern":    
        //text += generateHTMLIntern(element);
      break;

      default:
        console.log("incorrect input");
      break
    }
  }

  text += secondhalf;
  fs.writeFile("./dist/index.html", text, (err) => {
    if (err) throw err;
    console.log(err);
    console.log(text);
  });
}

function generateHTMLManager( name, ID, email, officeNumber ) {

  return `
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${ID}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${email}</li>
        <li class="list-group-item">LinkedIn: ${officeNumber}</li>
      </ul>
    </div>
  `;
}

const generateHTMLEngineer = ({ name, ID, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${ID}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

const generateHTMLIntern = ({ name, ID, email, school }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${ID}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${email}</li>
      <li class="list-group-item">LinkedIn: ${school}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

//module.exports = template;