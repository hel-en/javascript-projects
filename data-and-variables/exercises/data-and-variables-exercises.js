// Declare and assign the variables below

let shuttleName = "Determination";
const milesPerKilometer = 0.621;
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;


// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof milesPerKilometer);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);


// Calculate a space mission below

let distanceToMarsMi = distanceToMarsKm * milesPerKilometer;
let timeToMarsHours = distanceToMarsMi / shuttleSpeedMph;
let timeToMarsDays = timeToMarsHours / 24;


// Print the results of the space mission calculations below

console.log(shuttleName +" will take " + timeToMarsDays + " days to reach Mars.");


// Calculate a trip to the moon below

let distanceToMoonMi = distanceToMoonKm * milesPerKilometer;
let timeToMoonHours = distanceToMoonMi / shuttleSpeedMph;
let timeToMoonDays = timeToMoonHours / 24;


// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + timeToMoonDays + " days to reach the Moon.");