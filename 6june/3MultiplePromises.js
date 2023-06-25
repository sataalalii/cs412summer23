var async = require("async");

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'one') // resolve with argument 'one' after 2 seconds.
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two')
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three')
});

Promise.all([promise1, promise2, promise3]) // promise-based functions simultaneously -- waits for all to come back.
    .then(values => console.log(`ALL: values: ${values}`))  // Logs ["one", "two", "three"]
// Promise.waterfall([promise1, promise2, promise3]) //from async.io package on npmjs.org
//     .then(values => console.log(`ALL: values: ${values}`))  // Logs ["one", "two", "three"]


// Scenario in which to use race: Fastest response of servers to API call; don't care which server it is.
Promise.race([promise1, promise2, promise3]) // promise-based functions and returns whichever comes back first.
    .then(value => console.log(`RACE: value: ${value}`))  // Logs "two"

// if want to use other functions not in native js, use the async package -- search npm js -> async.
Promise.waterfall([promise1, promise2, promise3])
    .then(values => console.log(`All: Values: ${values}`)) // Logs ["one", "two", "three"] -- consecutively.
