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


// Task: Write a function that splits an array into smaller arrays (chunks) of a specified size.
function chunkArray(array, size) {
    // Return an empty array if size is less than 1
    if (size < 1) return [];
    
    const result = [];
    
    // Loop through the array
    for (let i = 0; i < array.length; i += size) {
        // Use slice to create a chunk of the specified size
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    
    return result;
}

// Example usage
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(chunkArray([], 2)); // []
function chunkArray(array, size) {
    // Return an empty array if size is less than 1
    if (size < 1) return [];
    
    const result = [];
    
    // Loop through the array
    for (let i = 0; i < array.length; i += size) {
        // Use slice to create a chunk of the specified size
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    
    return result;
}

// Example usage
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(chunkArray([], 2)); // []
