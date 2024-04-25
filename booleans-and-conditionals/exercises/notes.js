
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));

//if

let billHasBeenPaid = false;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
}


let num = 8
if (num % 2 === 0 && num > 3) {
    console.log(num, "is even");
    console.log(num, "is greater than 3");
 }

 //if-else
billHasBeenPaid = true;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
} else {
   console.log("Your payments are up to date.");
}


//else-if
let x = 10;
let y = 20;

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else {
   console.log("x and y are equal");
}


//another example

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else if (x % 5 === 0) {
   console.log("x is divisible by 5");
} else if (x % 2 === 0) {
   console.log("x is even");
}

let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}

num = 7;
if (num % 2 === 0) {
    console.log("EVEN");

    if (num > 0) {
    console.log("POSITIVE");
    }
}
//nothing is printed because 7 is not even, therefore the second conditional does not run.


num = 7;

if (num % 2 === 0) {
   console.log("EVEN");
}

if (num > 0) {
   console.log("POSITIVE");
}
//this prints positive because, since the conditionals are not nested correctly, they are run separately and individualy.

num = 7;
if (num % 2 === 0) {
    console.log("EVEN");

    if (num > 0) {
    console.log("POSITIVE");
    }
}
//prints nothing because first conditional is false

num = 8;
if (num % 2 === 0) {
    console.log("EVEN");

    if (num > 0) {
    console.log("POSITIVE");
    }
}
//this prints both because both are true.

num = -8;
if (num % 2 === 0) {
    console.log("EVEN");

    if (num > 0) {
    console.log("POSITIVE");
    }
}
//this only prints EVEN because only the first conditional is true

num = -7;
if (num % 2 === 0) {
    console.log("EVEN");

    if (num > 0) {
    console.log("POSITIVE");
    }
}
//nothing because the first conditional is false

num = 0;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}
//nothing

//3 Write expressions to satisfy the safety rules
//3.1 crewStatus

if (crewStatus) {
    console.log("Crew Ready");
 } else {
    console.log("Crew Not Ready");
 }
 //Prints "Crew Ready"
 
 //3.2 computerStatusCode
 
 if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
 } else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
 } else {
    console.log("ALERT: Computer offline!");
 }
 //Prints "Please stand by. Computer is rebooting."
 
 //3.3 shuttleSpeed
 
 if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
 } else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
 } else {
    console.log("Stable speed");
 }
 //Prints "Stable speed"
 
 //4 PREDICT: Do these blocks of code produce the same result? Answer Yes or No.
 /*
 if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }
 */
 
 //Prediction: No
 
 //4 ACTUAL:
 if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
 } else {
    console.log("WARNING. Not ready");
 }
 
 if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }
 /*
 I was wrong. They do print the same thing. 
 This is because it each of the variables were originally true. 
 ! reversed the value of each variable to `false`.
 The first condition will only run if any one of the variables evaluates to `true`.
 None were true, therefore the `else` statement was run.
 */
 
 
 //5 Monitor the shuttle's fuel status.
 //First attempt:
 let fuelLevel;
 let engineTemperature;
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Prints "ENGINE FAILURE IMMINENT!"
 
 //5 Condition 1
 fuelLevel = 2000;
 engineTemperature = 2000;
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Should print "ENGINE FAILURE IMMINENT!"" because engineIndicatorLight = "red blinking"
 //Does.
 
 //5 Condition 2
 fuelLevel = 21000;
 engineTemperature = 1200;
 engineIndicatorLight = "green";
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Should print "Full tank. Engines good"
 //Does.
 
 //5 Condition 3
 fuelLevel = 900;
 engineTemperature = 3000;
 engineIndicatorLight = "green blinking";
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Should print "ENGINE FAILURE IMMINENT!"
 //Does.
 
 //5 Condition 4
 fuelLevel = 5000;
 engineTemperature = 1200;
 engineIndicatorLight = (!"red blinking");
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Should print "Check fuel level. Engines running hot."
 //Does.
 
 //5 Condition 5
 fuelLevel = 12000;
 engineTemperature = 2600;
 engineIndicatorLight = (!"red blinking");
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Should pring "Check fuel level. Engines running hot."
 //Does.
 
 //5 Condition 6
 fuelLevel = 18000;
 engineTemperature = 2500;
 engineIndicatorLight = (!"red blinking");
 
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
    console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <=2500) {
    console.log("Fuel level above 25%. Engines good.");
 } else {
    console.log("Fuel and engine status pending");
 }
 //Should print "Fuel level above 50%. Engines good."
 //Does.
 
 
 //6 Final bit of fun!
 
 let commandOverride = true
 fuelLevel = 15000
 engineIndicatorLight = "red blinking"
 
 if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Cleared to launch!");
 } else {
    console.log ("Launch scrubbed!");
 }
 //Shuttle should launch regardless of fuelLevel and engineIndicatorLight status.
 //Prints "Cleared to launch!"
 
 commandOverride = false
 fuelLevel = 15000
 engineIndicatorLight = "red blinking"
 
 if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Cleared to launch!");
 } else {
    console.log ("Launch scrubbed!");
 }
 //Shuttle should only launch if the fuel and engine check are OK.
 //Prints "Launch scrubbed!"
 
 commandOverride = false
 fuelLevel = 21000
 engineIndicatorLight = "red blinking"
 
 if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Cleared to launch!");
 } else {
    console.log ("Launch scrubbed!");
 }
 //Should print "Launch scrubbed!" again because light is red blinking.
 //Prints "Launch scrubbed!"
 
 commandOverride = false
 fuelLevel = 21000
 engineIndicatorLight = "green"
 
 if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true) {
    console.log("Cleared to launch!");
 } else {
    console.log ("Launch scrubbed!");
 }
 //Should launch no problem.
 //Prints "Cleared to launch!"