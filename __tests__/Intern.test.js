const Intern = require("./lib/EmployeeClass");

describe("Intern", () => {
    describe("Initialization", () => {
      it("This will create an employee object, with id num, name, school", () => {
        const employee = new Employee(1, "name", "school");
        
        expect(employee.ID).toEqual(1);
        expect(employee.name).toEqual("name");
        expect(employee.school).toEqual("school");
        // getters
        expect(employee.getName()).toEqual("name")
        expect(employee.getId()).toEqual(1)
        expect(employee.getSchool()).toEqual("school")
        expect(employee.getRole()).toEqual("school")
      })
    })
  })