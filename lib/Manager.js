import(Employee.js);

class Manager extends Employee
{
    constructor(name, id, email, officerNumber)
    {
        super(name, id, email);
        this.officerNumber = officerNumber;
    }

    getRole()
    {
        return 'Manager';
    }
}