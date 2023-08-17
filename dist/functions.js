"use strict";
/*

function greet(name :string) {
    console.log(`Hello ${name}`);
}

greet('John'); */
function printPotition(position) {
    console.log(`Lat: ${position.lat} Long: ${position.long}`);
}
printPotition({ lat: 14.123, long: 56.987 });
