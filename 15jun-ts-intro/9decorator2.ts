class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @logMethod
    greet() {
        return "Hello, " + this.greeting;
    }
}

function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    // Editing the descriptor/value
    descriptor.value = function(...args: any[]) {
        console.log("Arguments: ", args.join(", "));
        let result = originalMethod.apply(this, args);
        console.log("The method return value: ", result);
        return result;
    }

    // Returns edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}

let greeter = new Greeter('there');
greeter.greet();