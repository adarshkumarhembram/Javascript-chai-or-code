// Arithmetic operators

let x=3;
let y=4;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x%y);
console.log(x+x+y);
console.log(x=y);


//comparision operator

console.log(x>y);

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");

if (age >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`${18 - age} years he need to turn 18`);
}
