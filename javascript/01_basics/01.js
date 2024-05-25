const accoundId = 637389;

let accountEmail = "adarsh42@gmail.com";

var accountPassword = "64839";

acccountCity = "dhanbad";

// accoundId = 2;

// console.log(accoundId);

// accountEmail = "a@gmail.com";
// console.log(accountEmail);

accountEmail = "hytg@gmail.com";
accountPassword = "749893";
acccountCity = "bokaro";
console.log(accoundId);
console.table([accoundId, accountEmail, accountPassword, accountPassword]);

//
// prefer not to use var beacuse issue in block scope and function scope
//
console.log("hello");

// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");

if (age >= 18) {
  console.log("you are old enough to drive");
} else {
  console.log(`${18 - age} years he need to turn 18`);
}

// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (fileName) => {
  const fileNameArray = fileName.split(".");
  const fileExtension = fileNameArray[fileNameArray.length - 1];

  console.log(fileExtension);
};

getFileExtension("example.java"); // prints "txt" in the console
