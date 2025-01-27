"use strict";

let birthYear = prompt("Please enter your birth year:");

let currentYear = new Date().getFullYear();
let age = currentYear - parseInt(birthYear);

console.log("Your age is: " + age);