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