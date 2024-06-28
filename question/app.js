// Example of a complex JavaScript function
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example of a closure and higher-order function
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}
const counter = makeCounter();

// Example of asynchronous code using Promises
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Async operation completed');
        }, 2000);
    });
}

async function performAsyncTask() {
    try {
        const result = await asyncOperation();
        console.log(result);
    } catch (error) {
        console.error('Error during async operation:', error);
    }
}

// Example of classes and inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

const dog = new Dog('Rex');
dog.speak();

// Example of using modules
// file1.js
// export default function add(a, b) {
//     return a + b;
// }

// file2.js
// import add from './file1.js';
// console.log(add(3, 5)); // Output: 8

// Example of error handling
try {
    throw new Error('Example error');
} catch (error) {
    console.error('Caught an error:', error);
}

// Example of using Map and Set
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

const mySet = new Set();
mySet.add('a');
mySet.add('b');
mySet.add('a'); // Duplicates are ignored

console.log(myMap.get('key1')); // Output: value1
console.log(mySet.size); // Output: 2
