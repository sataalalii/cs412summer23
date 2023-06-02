
let adder = null;
adder = function (left, right) {
    return left + right;
}


const adder1 = function (left, right) {
    return left + right;
}

function adder2 (left, right) {
    return left + right;
}


let adder3 = (left, right) => {
    let foo = 5;
    return left + right;
} //fat arrow function from CoffeeScript

const executeFunction = (left, right, decorator) => decorator(left, right);

console.log(
    executeFunction(20, 22,
        (left, right) => left + right  //lambda function
        )
)


//console.log(adder3(5,6))

let counter = 5;
while (counter-- > 0) {
    console.log(counter);
}



let baz = 42;