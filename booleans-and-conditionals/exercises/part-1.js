//1 Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking"
let spaceSuitsOn = true
let shuttleCabinReady = true
let crewStatus = spaceSuitsOn && shuttleCabinReady
let computerStatusCode = 200
let shuttleSpeed = 15000


//2 BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
//Prediciton: "engines are off" will be printed
//Was correct. `engineIndicatorLight` as defined does not fit any of the conditional criteria. Therefore the `else` clause is executed.
