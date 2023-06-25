class DemoClass {
    public publicVar: string;
    private readonly privateVar: string;
    protected protectedVar: string;

    constructor(publicVar: string, privateVar: string, protectedVar: string) {
        this.publicVar = publicVar;
        this.privateVar = privateVar;
        this.protectedVar = protectedVar;
    }

    public getPrivateVar(): string {
        return this.privateVar;
    }

    public getProtectedVar(): string {
        return this.protectedVar;
    }
}

let demo = new DemoClass('public', 'private', 'protected');

console.log(`--------parent--------`);
console.log(demo.publicVar); // Output: public
console.log(demo.getPrivateVar()); // Output: private
console.log(demo.getProtectedVar()); // Output: protected

class ChildClass extends DemoClass {
    private printValues() : void {
        console.log(`public: ${this.publicVar}, 
        private: ${this.getPrivateVar()},
        protected: ${this.getProtectedVar()}`);
    }

    constructor() {
        super('public','private', 'protected');
    }

}

const child = new ChildClass();
console.log(`--------child--------`);
console.log(child.publicVar); // Output: public
console.log(child.getPrivateVar()); // Output: private
console.log('protected from child: ' + child.getProtectedVar()); // Output: protected
//child.privateVar = '5';
//child.protectedVar = '5';
