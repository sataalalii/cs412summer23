let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

// (.then fires off / starts the Promise).
myPromise.then(value => console.log(value),  // no reject function here yet, only resolve.
    err => console.log(`${err}`)); // function here is reject function.

// without .then, myPromise runs, but results aren't really captured.
