const Employee = require("./lib/EmployeeClass");

describe("Employee", () => {
    describe("Initialization", () => {
      it("This will create an employee object, with id num, name, email", () => {
        const employee = new Employee(1, "name", "email");
        
        expect(employee.ID).toEqual(1);
        expect(employee.name).toEqual("name");
        expect(employee.email).toEqual("email");
        // getters
        expect(employee.getName()).toEqual("name")
        expect(employee.getId()).toEqual(1)
        expect(employee.getEmail()).toEqual("email")
        expect(employee.getRole()).toEqual("Employee")
      })
    })
  })