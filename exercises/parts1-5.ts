// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 2250000000;
let kilometersToTheMoon: number = 394400;
let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;


// Code an output statement here (use a template literal):


// Part 3: Create a Function ("getDaysToLocation")


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// Part 4: Create a Spacecraft Class

class Spacecraft {
  milesPerKilometer: number;
  name: string;
  speedMph: number;
  constructor(name: string, mph: number) {
    this.milesPerKilometer = 0.621;
    this.name = name;
    this.speedMph = mph;
  }

  getDaysToLocation(distance: number): number {
    let milesAway: number = distance * this.milesPerKilometer;
    let hoursAway: number = milesAway / this.speedMph;
    return hoursAway / 24;
  }

  printDaysToLocation(location: SpaceLocation): void {
    console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
  }
}

// Create an instance of the class here:

let spaceShip = new Spacecraft(spacecraftName, speedMph);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`${spaceShip.name} would take ${spaceShip.getDaysToLocation(kilometersToMars)} day to get to Mars.`);
console.log(`${spaceShip.name} would take ${spaceShip.getDaysToLocation(kilometersToTheMoon)} day to get to the Moon.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:

spaceShip.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShip.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));