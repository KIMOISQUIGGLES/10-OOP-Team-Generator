const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require('./util/generateHtml');
const fs = require('fs');

const team = [];

function askQuestion() {
    inquirer.prompt([
        {
            //PROMPTS USER TO MAKE NEW TEAM MEMBER, OR TO FINISH THE TEAM BUILDER
            name: "question",
            type: "list",
            message: "Welcome to the Team Generator, please choose one: ",
            choices: ["ADD A NEW TEAM MEMBER", "FINISHED"]
        }
    ]).then(answers => {
        switch(answers.question) {
            //PROCEEDS TO ADDING NEW TEAM MEMBER WHEN USER SELECTS
            case "ADD A NEW TEAM MEMBER":
                console.log("Adding a new team member!");
                addMember();
                break;

            default: 
                console.log("Thank you for using our app!");
                const htmlPageContent = generateHTML(team);
                fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
                );
                break;
        }
    })
}

//PROMPTS USER DIFFERENT QUESTION BASED ON WHICH TYPE OF EMPLOYEE IS SELECTED
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["INTERN", "ENGINEER", "MANAGER"],
            message: "Please select which type of member you are adding.",
            name: "memberChoice",
        }
    ])
    //PREPARES SPECIFIC SETS OF QUESTIONS
    .then(role => {
        switch(role.memberChoice) {
            case "INTERN":
            internQuestion();
                break;

            case "ENGINEER":
            engineerQuestion();
                break;

            case "MANAGER":
            managerQuestion();
                break;
        }
    })
}

function internQuestion() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the member's name",
            name: "memberName",
        },
        {
            type: "input",
            message: "Please enter the member's ID",
            name: "memberID",
        },
        {
            type: "input",
            message: "Please enter the member's email",
            name: "memberemail",
        },
        {
            type: "input",
            message: "Please enter the member's school",
            name: "memberSchool",
        },
    ])
    .then(answers =>{
        const intern = new Intern(answers.memberName, answers.memberID, answers.memberemail, answers.memberSchool);
        team.push(intern);
        askQuestion();
    })
}

function engineerQuestion() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the member's name",
            name: "memberName",
        },
        {
            type: "input",
            message: "Please enter the member's ID",
            name: "memberID",
        },
        {
            type: "input",
            message: "Please enter the member's email",
            name: "memberemail",
        },
        {
            type: "input",
            message: "Please enter the member's GitHub",
            name: "memberGithub",
        },
    ])
    .then(answers =>{
        const engineer = new Engineer(answers.memberName, answers.memberID, answers.memberemail, answers.memberGithub);
        team.push(engineer);
        askQuestion();

    })
}

function managerQuestion() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the member's name",
            name: "memberName",
        },
        {
            type: "input",
            message: "Please enter the member's ID",
            name: "memberID",
        },
        {
            type: "input",
            message: "Please enter the member's email",
            name: "memberemail",
        },
        {
            type: "input",
            message: "Please enter the member's office number",
            name: "memberOfficeNumber",
        },
    ])
    .then(answers =>{
        const manager = new Manager(answers.memberName, answers.memberID, answers.memberemail, answers.memberOfficeNumber);
        team.push(manager);
        askQuestion();

    })
}

askQuestion()