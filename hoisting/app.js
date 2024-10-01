console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

Zfun();

function Zfun(){
    console.log("function has been called");
}
console.log(Zfun);


function foo() {
    console.log("Hello, world!");
  }
  
  foo(); // "Hello, world!"

  bar(); // TypeError: bar is not a function
  var bar = function() {
      console.log("Hello, I am bar!");
  };

  
  console.log(x); // undefined
var x = 5;

  

// hoisting

console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5
