//  Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

const calculateBMI = function (weight, height) {
    return weight / (height * height);
  };
  let ans = calculateBMI(10, 20);
  
  if (ans < 18.5) {
    console.log("Underweight");
  } else if (ans >= 18.5 && ans <= 24.9) {
    console.log("Normal weight");
  } else if (ans >= 25 && ans <= 29.9) {
    console.log("Over weight");
  } else {
    console.log("Obese");
  }
  

  // . Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

let num = 5;
let i = 1;

while (i <= 10) {
  console.log(i * num);
  i++;
}


// . Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//      *****

for (let i = 0; i < 5; i++) {
  let add = "";
  for (let j = 0; j <= i; j++) {
    add += "* ";
  }
  console.log(add);
}
// --------------
for (let i = 0; i < 5; i++) {
  let add = "";
  for (let j = 0; j < 5; j++) {
    add += "* ";
  }
  console.log(add);
}
// --------------
for (let i = 1; i <= 5; i++) {
  let bag = "";

  for (let j = 1; j <= 5 - i; j++) {
    bag += " ";
  }

  for (let k = 1; k <= i * 2 - 1; k++) {
    bag += "*";
  }

  console.log(bag);
}

// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const getFileExtension = (fileName) => {
  const fileNameArray = fileName.split(".");
  const fileExtension = fileNameArray[fileNameArray.length - 1];

  console.log(fileExtension);
};

getFileExtension("example.java"); // prints "txt" in the console
// console.log();


// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}
// console.log();


// . Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

// let nume= 5;
// // let i = 1;

// while (i <= 10) {
//   console.log(i * nume);
//   i++;
// }

// . In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let contries = ["INDIA", "BANGLADESH", "AUSTRALIA", "ETHIOPIA"];

let flag = true;
for (let i = 0; i < contries.length; i++) {
  if (contries[i] == "ETHIOPIA") {
    console.log("ETHIOPIA");
    break;
  } else {
    flag = false;
  }
}

if (flag == false) {
  contries.push("Ethiopia");
}


// console.log(2 - 2); //0
// console.log("2" - "2"); //0
// console.log("2" - 2); //0
// console.log(2 - "2"); //0
// console.log("A" - "A"); //NaN
// console.log("a" - 1); //NaN

// console.log(2 + 2); //4
// console.log("2" + 2); //22
// console.log(2 + "2"); //22
// console.log("2" + "2"); //22
// console.log("a" + "1"); //a1
// console.log("a" + "a"); //aa

// // Javascript + operator behaves as,

// //     number operator when both operands are number
// //     concat operator if any one or both of the operands are string.

// // Javascript -{minus} operator always behaves as number operator. if any one or both of the operands are string, Javascript attempts to convert it to a number, if not able to convert then return NaN.

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((ele) => {
//   console.log(ele);

//   if (ele == 2) {
//     // break;
//     console.log(ele);
//   }
// });

// // Uncaught SyntaxError: Illegal break statement
// // Uncaught SyntaxError: Illegal continue statement
// // There is no way to stop or break a forEach loop other than throwing an exception. If you need such behavior, the forEach method is the wrong tool. Early termination may be accomplished with:

// var foo = 2;

// function one() {
//   console.log(foo);

//   var foo = 10;
// }

// one();
// // Have you guessed foo = 1 or foo = 2?
// // It’s neither one of them. It will print undefined. Here is the explanation,
// // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// // Let’s see how it is interpreted by the compiler in hoisting process,

// for (let i = 0; i < 100; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// // output - 0,1,2

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// // output - 3,3,3
// 
// 
