export function whatsMyType(argument:any):any{
    return argument;
}

const imString = whatsMyType('Hello world');
const imNumber = whatsMyType(100);
const imArray = whatsMyType([1,2,3,4,5,6,7,8,9]);

console.log(imString.split2(' '));
console.log(imNumber.split2(' '));
console.log(imArray.split2(' '));