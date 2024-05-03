// Initialize Variables below

let date = "Monday 2019-03-18"; 
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7


if(astronautCount <= 7) {
   // console.log('Astronaut Count: ' + astronautCount);
} else {
    preparedForLiftOff = false;
    console.log('Abort launch!');
}


// add logic below to verify all astronauts are ready


if (astronautStatus === "ready") {
} else {
    preparedForLiftOff = false;
    console.log('Abort launch!');
}


// add logic below to verify the total mass does not exceed the maximum limit of 850000


if (totalMassKg <= maximumMassLimit) {
   // console.log("Crew Mass: " + crewMassKg + " kg");
   // console.log("Fuel Mass: " + fuelMassKg + " kg");
    //console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    //console.log("Total Mass: " + totalMassKg + " kg");
} else {
    preparedForLiftOff = false;
    console.log('Abort launch!');
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300


if(fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) {
   // console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
} else {
    preparedForLiftOff = false;
    console.log('Abort launch!');
}

// add logic below to verify the fuel level is at 100%


if(fuelLevel === "100%") {
} else {
    preparedForLiftOff = false; 
    console.log("Abort launch!");
}


// add logic below to verify the weather status is clear


if (weatherStatus === "clear") {
   // console.log("Weather Status: " + weatherStatus);
} else {
    preparedForLiftOff = false;
    console.log("Abort launch!");
}


// Verify shuttle launch can proceed based on above conditions

if(preparedForLiftOff = true) {
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log('Astronaut Count: ' + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
    console.log("Weather Status: " + weatherStatus);
    console.log("All systems go! Have a safe flight!");
} else {
    console.log("Abort Launch!");
}




/*
First attempt LOL:

if (astronautCount <= 7) {
    console.log(astronautCount, crewMassKg);
} else if (totalMassKg <= maximumMassLimit) {
    console.log(fuelMassKg, shuttleMassKg, totalMassKg);
} else if (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) {
    console.log(fuelTempCelsius);
} else if (fuelLevel === "100%" && weatherStatus === "clear" ) {
    console.log(weatherStatus);
} else {
    console.log("Shut down operations.")
}
*/

/*
if (astronautCount <= 7) {
    console.log(astronautCount, crewMassKg);
} 
if (totalMassKg <= maximumMassLimit) {
    console.log(fuelMassKg, shuttleMassKg, totalMassKg);
} 
if (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) {
    console.log(fuelTempCelsius);
} 

if (fuelLevel === "100%" && weatherStatus === "clear" ) {
    console.log(weatherStatus);
} 
*/