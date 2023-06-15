class SampleClass {
    static staticProperty: string = "I am a static property";

    static staticMethod() {
        console.log('I am a static method');
    }

    regularProperty: string = "I am a regular property";

    regularMethod() {
        console.log('I am a regular method');
    }
}

// To access the static property or method, you don't need an instance of MyClass:
console.log(SampleClass.staticProperty); // Output: "I am a static property"
SampleClass.staticMethod(); // Output: "I am a static method"

// To access the regular property or method, you need to create an instance of MyClass:
let myInstance = new SampleClass();
console.log(myInstance.regularProperty); // Output: "I am a regular property"
myInstance.regularMethod(); // Output: "I am a regular method"
