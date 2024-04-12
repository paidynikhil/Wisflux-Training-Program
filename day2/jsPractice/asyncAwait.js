//We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.


//example 1

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f(); //async function

//The await keyword is used inside the async function to wait for the asynchronous operation.

// example 2
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

//output: Promise resolved
//        hello

//example 3

function asynchronous_operational_method() {
  let first_promise = new Promise((resolve, reject) => resolve("Hello"));
  let second_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("nikhil");
    }, 1000);
  });
  let combined_promise = Promise.all([first_promise, second_promise]);
  return combined_promise;
}

async function display() {
  let data = await asynchronous_operational_method();
  console.log(data);
}

display();
//output: ['Hello','nikhil']

//example 4

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

//output: resolved

//example 5