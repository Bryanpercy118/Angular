export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1:Passenger ={
    name:'Bryan',
}

const passenger2:Passenger ={
    name:'Andres',
    children:['maria','carmen'],
}

const printChildren = (passenger:Passenger) => {
   // const howManyChildren = passenger.children?.length;
    const {name: name, children: children} = passenger
    console.log(name, children?.length || 0);
}
printChildren(passenger1);
printChildren(passenger2);