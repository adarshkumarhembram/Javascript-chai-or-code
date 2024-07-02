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
  