console.log(2 - 2); //0
console.log("2" - "2"); //0
console.log("2" - 2); //0
console.log(2 - "2"); //0
console.log("A" - "A"); //NaN
console.log("a" - 1); //NaN

console.log(2 + 2); //4
console.log("2" + 2); //22
console.log(2 + "2"); //22
console.log("2" + "2"); //22
console.log("a" + "1"); //a1
console.log("a" + "a"); //aa

// Javascript + operator behaves as,

//     number operator when both operands are number
//     concat operator if any one or both of the operands are string.

// Javascript -{minus} operator always behaves as number operator. if any one or both of the operands are string, Javascript attempts to convert it to a number, if not able to convert then return NaN.

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach((ele) => {
  console.log(ele);

  if (ele == 2) {
    // break;
    console.log(ele);
  }
});

// Uncaught SyntaxError: Illegal break statement
// Uncaught SyntaxError: Illegal continue statement
// There is no way to stop or break a forEach loop other than throwing an exception. If you need such behavior, the forEach method is the wrong tool. Early termination may be accomplished with:

var foo = 2;

function one() {
  console.log(foo);

  var foo = 10;
}

one();
// Have you guessed foo = 1 or foo = 2?
// It’s neither one of them. It will print undefined. Here is the explanation,
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// Let’s see how it is interpreted by the compiler in hoisting process,

for (let i = 0; i < 100; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// output - 0,1,2

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// output - 3,3,3


// . 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let strArr = str.split(",");
console.log(strArr);
console.log(1 + '2' + '2'); // Output: "122"
console.log(1 + +'2' + '2'); // Output: "32"
console.log(1 + -'1' + '2'); // Output: "02"
console.log(+'1' + '1' + '2'); // Output: "112"
console.log('A' - 'B' + '2'); // Output: "NaN2"
console.log('A' - 'B' + 2); // Output: NaN


// Define a car object
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2022,
  color: 'black',
  mileage: 5000,
  isWorking: true,
  drive: function() {
      if (this.isWorking) {
          console.log('The car is being driven.');
          this.mileage += 50; // Increase mileage when driven
      } else {
          console.log('The car is not in working condition.');
      }
  },
  repair: function() {
      this.isWorking = true;
      console.log('The car has been repaired.');
  }
};

// Access properties and methods of the car object
console.log(`Car make: ${car.make}`);
console.log(`Car model: ${car.model}`);
console.log(`Car year: ${car.year}`);
console.log(`Car color: ${car.color}`);
console.log(`Car mileage: ${car.mileage}`);
car.drive(); // Simulate driving the car
console.log(`Updated mileage: ${car.mileage}`);
car.repair(); // Repair the car
car.drive(); // Drive the car again after repair
// 
