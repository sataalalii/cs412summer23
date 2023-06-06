let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 3000);
});

myPromise.then(value => console.log(value), //resolve    (.then fires off / starts the Promise)
    err => console.log(`Error: ${err}`)  //reject
    );  //no reject

//myPromise;
