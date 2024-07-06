// object literals

const jsuser={
    name: "Adarsh",
    age: 22,
    location: "dhanbad",
    email: "uhyg@gmail.com"

}
console.log(jsuser);
console.log(jsuser.age);
console.log(jsuser.email);
console.log(jsuser["email"]);


// Creating an object using object literal syntax
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing properties and methods
console.log(person.firstName);  // Output: John
console.log(person.age);        // Output: 30
console.log(person.fullName()); // Output: John Doe

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }
// 



// Define a function that calculates the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

// Calculate and print the factorial of 5
console.log(factorial(5));

// Define an array of numbers and use the map function to double each number
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Define an object representing a person and print their name
// const persosn = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   greet: function() {
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
//   }
// };
// person.greet();

// console.log(map);
