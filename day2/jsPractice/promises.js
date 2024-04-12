//A Promise is a special JavaScript object. It produces a value after an asynchronous operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

//Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

//example 1

let promise1 = new Promise(function (resolve, reject) {
  resolve("I am surely going to get resolved!");

  reject(new Error("Will this be ignored?")); // ignored
  resolve("Ignored?"); // ignored
});

//example 2
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";

let promise = getPromise(POKEMON_URL);

const consumer = () => {
  promise.then(
    (result) => {
      console.log({ result }); 
    },
    (error) => {
      // As the URL is a valid one, this will not be called.
      console.log("We have encountered an Error!"); // Log an error
    }
  );
};

consumer();

//example 3

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise1 = new Promise(function (myResolve, myReject) {
  let x = 0;

  // some code (try to change x to 5)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

//example 4
let myPromise2 = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 3000);
});

myPromise.then(function (value) {
  document.getElementById("demo").innerHTML = value;
});

//example 5

let myPromise3 = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.htm");
  req.onload = function () {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

