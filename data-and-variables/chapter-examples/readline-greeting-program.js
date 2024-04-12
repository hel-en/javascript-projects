const input = require('readline-sync');

let name = input.question("Enter your name: ");
let otherName = input.question("Enter your other name: ")

console.log("Hello, " + name + " " + otherName + "!");

let firstName = input.question("Enter your first name: ")
let lastName = input.question("Enter your last name: ")

console.log("First name: " + firstName + 
                "\nLast Name: " + lastName + 
                "\nLast, First: " + lastName + ", " + firstName)