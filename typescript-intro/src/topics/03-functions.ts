
// function addNumber( a:number, b:number):number
// {
//     return a+b;
// }

// const addNumberArrow =(a:number,b:number) : string => {
//     return  `${a+b}`;               
// }

// function multiply (firstNumber:number, secondNumber?:number, base=2):number{
//     return firstNumber*base;
// }

// const result:number = addNumber(1,2);
// const result2:string = addNumberArrow(1,2);
// const result3:number = multiply(1);
// console.log({result, result2, result3});

interface Character {
    name:string,
    hp:number,
    showHp: () => void;
}

const healthCharacter = (character: Character, amount: number)=>{
    character.hp+=amount;
}


const strider: Character = {
    name:'Percy',
    hp:50,
    showHp(){
        console.log(`Los puntos de vida son ${this.hp}`);
    }
}

healthCharacter(strider,30);
healthCharacter(strider,20);

strider.showHp()


export{}