// launchcode.test.js code:
const launchcode = require('../index.js');

// let launchcodeTests = {
//   test1: "organization returns 'nonprofit'"
// }

describe("Testing launchcode", function(){
  // Write your unit tests here!
test("should return 'nonprofit' for organization key", () => {
  expect(launchcode.organization).toBe("nonprofit");
})

test("should return 'Jeff' for executive director key", () => {
  expect(launchcode.executiveDirector).toBe("Jeff");
})
  
test("launchOutput() should return 'Launch!' when number divisible by 2", () => {
  expect(launchcode.launchOutput(2)).toBe("Launch!");
})

test("launchOutput() shoudl return 'Code!' when number divisible by 3", () => {
  expect(launchcode.launchOutput(3)).toBe("Code!");
})

test("launchOutput() should return 'Rocks!' when number divisible by 5", () => {
  expect(launchcode.launchOutput(5)).toBe("Rocks!");
})

test("launchOutput() should return 'LaunchCode!' when number is divisble by 2 and 3", () => {
  expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
 })

 test("launchOutput() should return 'Code Rocks!' when number is divisble by 3 and 5", () => {
  expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
 })

 test("launchOutput() should return 'Launch Rocks!' when number is divisble by 2 and 5", () => {
  expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
 })

 test("launchOutput() should return 'LaunchCode Rocks!' when number is divisble by 2, 3, & 5", () => {
  expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
 })

 test("launchOutput() should return 'Rutabagas! That doesn't work.' when number is NOT divisble by 2, 3, or 5", () => {
  expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
 })

test("percentageCoolEmployees must return a value of 100", () => {
  expect(launchcode.percentageCoolEmployees).toBe(100);
})

test("programsOffered contains 3 items: 'Web Development', 'Data Analysis', and 'Liftoff'", () => {
  expect(launchcode.programsOffered.includes("Web Development")).toBe(true);
  expect(launchcode.programsOffered.includes("Data Analysis")).toBe(true);
  expect(launchcode.programsOffered.includes("Liftoff")).toBe(true);
  expect(launchcode.programsOffered.length).toBe(3);
})

});