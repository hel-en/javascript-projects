const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
// degreesC = Number(degreesC);
let degreesK = degreesC + 273.15;
// console.log(degreesC);
// console.log(typeof degreesC);

console.log('Degrees K:', degreesK);


/*
must invesigate variable, then determine typeof, then convert it to the correct data type
correct code is shown as comments
*/
