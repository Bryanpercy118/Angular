
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

function taxCalculation(options: TaxCalculationoptions):number[]{
    let totalTax = 0;

    options.products.forEach(product => {
        totalTax += product.price;
    });
    
    return [totalTax, totalTax*options.tax];
}

const shoppingCart =[phone, tablet];
const tax =0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total', result[0]);
console.log('Tax', result[1]);
export{};