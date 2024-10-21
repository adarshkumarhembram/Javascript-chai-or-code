// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // db calls , cryptography , network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },3000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },3000)
// }).then(function(){
//     console.log("Promise consumed");
    
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'chai', email:'code@example.com'})
//     },4000)
// })
// promiseThree.then(function(user){
//     console.log(user);
    
// })

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: 'chai', email:'code@example.com'})            
        }else{
            reject('Error: Something went wrong')
        }
    },5000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("the promise either resolved or rejected");
    
})