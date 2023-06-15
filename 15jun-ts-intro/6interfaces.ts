interface Person {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
}

let john: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(john.getFullName()); // Output: John Doe


//--------------------------

interface Printable {
    print(): void;
}

class Reports implements Printable {
    private readonly content: string;

    constructor(content: string) {
        this.content = content;
    }

    print() {
        console.log(this.content);
    }
}

let myReport = new Reports("Hello, world!");
myReport.print(); // Output: Hello, world!

//We very often use an interface to describe the shape of data returned
//from an API call. For example:

interface WxData {
    id: number;
    name: string;
    email?: string;  //the ? marks this as optional
}

//function getUserData(): Promise<WxData> {
    // fetch data from an API
//}
