//generates html template for the buildTeam function
//how to pass team array to this function?

var text = firsthalf; //a string to hold the text to be placed in index.html later

function generateHTML(teamArray)
{
  teamArray.forEach(element => {
    console.log(element);
    switch(element.role) 
    {
      case "Manager":
        text + generateHTMLManager(element);
      break;
      
      case "Engineer":
        text + generateHTMLEngineer(element);
      break;

      case "Intern":    
        text + generateHTMLIntern(element);
      break;

      default:
        console.log("End of list?");
        text + secondhalf;
      break
    }
  });

  writeToFile("./dist/index.html", text);
}

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

const generateHTMLManager = ({ name, ID, github, linkedin }) =>
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

module.exports = template; // why cant i export the template? console says "template is not defined"