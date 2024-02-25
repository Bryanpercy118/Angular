import { Product, taxCalculation } from "./07-function-destructuring"

const shoppingCart: Product [] =[
    {
        description: 'phone',
        price: 100
    },
    {
        description: 'tablet',
        price: 200
    }
];

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log(total);
console.log(taxTotal);