const doDelay = (func, time) => {
    return new Promise((resolve, reject) => {
        console.log(`in delay`);
        setTimeout(func,
            time
        );
        console.log(`out of delay`);
        if (time > 5000) {
            resolve(time)
        } else {
            reject(time)
        }
    })
}

console.log(`Start run`);
doDelay(
    () => 42,
    14000
).then((time => { //resolve
        console.log(`value: ${time}`);
    }),
    (time) => { //reject
        console.log(`Rejected ${time}`)
    })

//Promisify this



