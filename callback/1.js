function h(x,fn){
    // h->hof
    // fn-> callback
    console.log(x*x);
    fn();
}

h(10,function (){

    console.log("done with callback");
})

console.log("start");
setTimeout(function f(){
    console.log("time done");
},3000 );
console.log("end");



// Define a function that takes a callback
function performTask(callback) {
    // Simulate some asynchronous task
    setTimeout(function() {
        // Once the task is done, execute the callback
        callback();
    }, 1000); // Simulating a 1 second delay
}

// Define the callback function
function callbackFunction() {
    console.log("Callback executed!");
}

// Call the performTask function and pass the callback
performTask(callbackFunction);



// Function to simulate an asynchronous operation (e.g., fetching data from a server)
function fetchData(callback) {
    // Simulate a delay (e.g., network request)
    setTimeout(() => {
        const data = [1, 2, 3, 4, 5];
        // Call the callback function with the fetched data
        callback(null, data);
    }, 2000); // Simulated delay of 2 seconds
}

// Callback function to handle the fetched data
function handleData(error, data) {
    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Fetched data:', data);
    }
}

// Call the fetchData function with the handleData callback
console.log('Fetching data...');
fetchData(handleData);
console.log('Data fetch initiated...');
