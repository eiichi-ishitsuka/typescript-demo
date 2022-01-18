export class HelloWorld {
    name: string;
    constructor(name : string) {
        this.name = name;
    }

    public show() {
        return 'Hello ' + this.name + '!!';
    }
}
