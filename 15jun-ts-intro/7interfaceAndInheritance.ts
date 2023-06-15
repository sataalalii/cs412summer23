interface Printable {
    print(): void;
}

class theDocument {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }
}

class theReport extends theDocument implements Printable {
    content: string;

    constructor(title: string, content: string) {
        super(title);
        this.content = content;
    }

    print() {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
    }
}

let aReport = new theReport("Annual Report", "This is an annual report.");
aReport.print();
