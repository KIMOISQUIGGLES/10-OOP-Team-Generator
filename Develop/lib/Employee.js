// TODO: Write code to define and export the Employee class
class employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //RETURNS EMPLOYEE'S NAME
    getName() {
        const name = this.name;
        return name;
    }
    //RETURNS EMPLOYEE ID
    getId() {
        const id = this.id;
        return id;
    }
    //RETURNS EMPLOYEE EMAIL
    getEmail() {
        const email = this.email;
        return email;
    }
    //RETURNS EMPLOYEE ROLE
    getRole() {
        const role = "Employee";
        return role;
    }
}

module.exports = employee;