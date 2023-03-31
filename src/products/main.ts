import { createProduct, calcStock, products } from './product.service';

createProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 12
});

createProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'XL'
});

console.log(products);
const total = calcStock();
console.log(total);
