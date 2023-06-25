// A Decorator is a special kind of declaration that can be attached
// to a class declaration, method, accessor, property, or parameter.
//This is a class decorator, which operates on the constructor


@sealed
class Greeter1 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

//Object.seal prevents any items being added to an object
//
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

//2. This is a method decorator
//
class Greeter2 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)  //mark the greet() function as not enumerable
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any,
                     propertyKey: string,
                     descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };

    //The PropertyDescriptor has properties like
    // value (the property's value),
    // writable (whether the property's value can be changed),
    // enumerable (whether the property shows up during enumeration of the properties),
    // configurable (whether the property can be removed or whether these attributes can be changed).
}
