export class Person{
    public name?: string;
    public age?: number;
    private address?: string;

    constructor() {
        this.name = 'John';
        this.age = 20;
        this.address = 'New York';
    }
}


const iroman = new Person();
console.log(iroman.name);
