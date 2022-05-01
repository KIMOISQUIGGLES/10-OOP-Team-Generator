// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require('./Employee');

class intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return `${this.school}`;
    }
    //OVERRIDES ROLE TO SAY "INTERN"
    getRole() { 
        return "Intern";
    }
}

module.exports = intern;