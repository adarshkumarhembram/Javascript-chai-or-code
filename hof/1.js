const powerTwo = n=>{
    return n**2

}

function powerCube (powerTwo,n){
    return powerTwo(n) **n
}

console.log(powerCube(powerTwo,2));


function sayhello(){
    return ()=>{
        console.log("hello adarsh");
    }
}

let guessvalue = sayhello()
// console.log(guessvalue);
guessvalue()