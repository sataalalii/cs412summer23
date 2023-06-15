function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");  // type of output will be 'string'
console.log(`${output1}`);

let output2 = identity<number>(100);  // type of output will be 'number'
console.log(`${output2}`);

//and another take, this time using a generic interface...
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function genFunc<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = genFunc;

console.log(myIdentity(100)); // prints: 100

//Note: we are using the interface to enforce the shape of the function
//assigned to myIdentity. If we didn't have the interface, any kind
//of function, with any signature, could be assigned.
