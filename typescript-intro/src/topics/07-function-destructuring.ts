
interface Product{
    description: string;
    price: number;
}

const phone : Product = {
    description: 'iPhone',
    price: 150.0
}

const tablet : Product = {
    description: 'iPad',
    price: 200.0
}

interface TaxCalculationoptions{
    tax: number;
    products: Product[];
}

//function taxCalculation({tax,products}: TaxCalculationoptions):[number,number]{
function taxCalculation(options: TaxCalculationoptions):[number,number]{
    const {tax,products} = options;
    
    let totalTax = 0;
    
    products.forEach(({price}) => {
        totalTax += price;
    });
    
    return [totalTax, totalTax*tax];
}

const shoppingCart =[phone, tablet];
const tax =0.15;

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total', total);
console.log('Tax', totalTax);
export{};