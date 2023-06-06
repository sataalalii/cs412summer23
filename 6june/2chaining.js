function promiseFunction(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value * 2);
        }, 2000);
    });
}

promiseFunction(2)
    .then(value => promiseFunction(value))
    .then(value => console.log(value))  // Logs 8
    .catch(error => console.log(error));
