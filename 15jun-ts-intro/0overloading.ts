function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Parameters must be numbers or strings");
}

console.log(add(1, 2)); // output: 3
console.log(add("Hello, ", "world!")); // output: "Hello, world!"
