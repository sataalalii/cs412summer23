let value: unknown;

let valueAsString: string = value as string;  // value is treated as a string here
let valueAsNumber: number = <number> value;  // Another way of doing type assertion
