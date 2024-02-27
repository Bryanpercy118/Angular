function classDecorator <T extends {new (...args:any[]):{}}>( constructor: T) {
    return class extends constructor{
        newProperty= 'newProperty';
        hello = 'hello';
    }
   
}

@classDecorator 
class SuperClass{
    public myProperty: string ="Abce123";

    print(){
        console.log(this.myProperty);
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);   