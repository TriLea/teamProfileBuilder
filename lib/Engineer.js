const Employee = require("./Employee");

class Engineer extends Employee
{
    constructor(name, id, email, github, LinkedIn)
    {
        super(name, id, email);
        this.github = github;
        this.LinkedIn = LinkedIn;
    }

    getGithub()
    {
        return this.github;
    }

    getRole()
    {
        return 'Engineer';
    }
}

module.exports = Engineer;