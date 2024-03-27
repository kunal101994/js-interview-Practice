// 1st method
// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, cryptography, network
//     setTimeout(function() {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function() {
//     console.log("Promise Consumed");
// })

// 2nd method
// new Promise (function(resolve, reject){
//     setTimeout(function() {
// console.log("My name is Satyanarayan Rout");
// resolve();
//     }, 1000)
// }).then(function() {
//     console.log("my wife name is Kunu");
// })

// 3rd method

// const promiseThree= new Promise(function(resolve, reject){
//     // how to data passed
//     setTimeout(function() {
//         resolve({username: "Satya", email:"satya@gmail.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// 4th method
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
      if(!error){
        resolve({username: "satya", password: "1234"})
      } else {
        reject('ERROR: Error is found')
      }
        
    }, 1000);
})

// call back hell
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("This Promise will kept"));