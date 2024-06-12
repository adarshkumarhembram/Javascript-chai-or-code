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
