import { Product, taxCalculation } from "./07-function-destructuring"

const shoppingCart: Product [] =[
    {
        description: 'phone',
        price: 150.0
    },
    {
        description: 'tablet',
        price: 200.0
    }
];

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ',total);
console.log('Tax: ',taxTotal);