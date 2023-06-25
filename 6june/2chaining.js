function promiseFunction(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    });
}
// no reject functions here, just resolves.
promiseFunction(2)
    .then(value => promiseFunction(value))
    .then(value => console.log(value))  // Logs 8
    .finally(() => console.log(`Done in promise.`))
    .catch(error => console.log(error)); // like try-catch block.

