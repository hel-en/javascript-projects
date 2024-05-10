const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

const FirstThreeLetters = str.slice(0,3);
let str2 = str.slice(3);
let pigLatin = str2 + FirstThreeLetters;
console.log(pigLatin);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} in Pig Latin looks like ${pigLatin}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

const word = input.question('Enter any word: ');
const userInput = input.question('Enter the number of letters to be relocated: ');

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let wordPigged = word.slice(userInput) + (word.slice(0, userInput));
let wordPiggedDefault = word.slice(3) + word.slice(0,3);

// if (userInput < word.length) {
//     console.log(word.slice(userInput) + (word.slice(0, userInput)));
// } else {
//     console.log((word.slice(3)+ word.slice(0,3)));
// }

if (userInput < word.length) {
    console.log(`${word} in Pig Latin looks like ${wordPigged}.`);
} else {
    console.log(`Oops! You entered a number equal to or longer than the word you picked. ${word} in Pig Latin looks like ${wordPiggedDefault}.`);
}