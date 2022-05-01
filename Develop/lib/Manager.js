// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const employee = require('./Employee');

class manager extends employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //OVERRIDES ROLE TO SAY "MANAGER"
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = manager;