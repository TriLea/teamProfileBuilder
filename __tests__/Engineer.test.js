const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("This will create an engineer object, with id num, name, getGithub", () => {
        const Engineer = new Engineer(1, "name", "github");
        
        expect(Engineer.ID).toEqual(1);
        expect(Engineer.name).toEqual("name");
        expect(Engineer.getGithub).toEqual("github");
        // getters
        expect(Engineer.getName()).toEqual("name");
        expect(Engineer.getId()).toEqual(1);
        expect(Engineer.getgetGithub()).toEqual("github");
        expect(Engineer.getRole()).toEqual("Engineer");
      })
    })
  })