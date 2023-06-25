class MyClass {
    public publicVar: string;
    private readonly privateVar: string;
    protected protectedVar: string;

    constructor(publicVar: string, privateVar: string, protectedVar: string) {
        this.publicVar = publicVar;
        this.privateVar = privateVar;
        this.protectedVar = protectedVar;
    }
    public addVals(): string {
        return this.privateVar + this.protectedVar;
    }
//these public methods are the object's interface
    //
    public getPrivateVar(): string {
        return this.privateVar;
    }

    public getProtectedVar(): string {
        return this.protectedVar;
    }
}

let myClass = new MyClass('public', 'private', 'protected');

console.log(myClass.publicVar); // Output: public
//console.log(`${myClass.privateVar}`); can't get to private data member
console.log(myClass.getPrivateVar()); // Output: private
console.log(myClass.getProtectedVar()); // Output: protected
