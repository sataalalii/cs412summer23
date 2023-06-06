let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'one')
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two')
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three')
});

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(`ALL: values: ${values}`))  // Logs ["one", "two", "three"]
// Promise.waterfall([promise1, promise2, promise3]) //from async.io package on npmjs.org
//     .then(values => console.log(`ALL: values: ${values}`))  // Logs ["one", "two", "three"]

Promise.race([promise1, promise2, promise3])
    .then(value => console.log(`RACE: value: ${value}`))  // Logs "two"
