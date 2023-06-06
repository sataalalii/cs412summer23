//Promises have three states: Pending (waiting), Resolved (no errs), Reject (err)
let resolvedPromise = Promise.resolve("Resolved!");
let rejectedPromise = Promise.reject("Rejected!");

resolvedPromise.then(value => console.log(value));  // Logs "Resolved!"
rejectedPromise.catch(reason => console.log(reason));  // Logs "Rejected!"

Promise.resolve(42).then(value => console.log(`Got ${value}`));