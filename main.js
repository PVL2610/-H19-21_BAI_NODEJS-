import { add } from './add.js';
import { subtract } from './subtract.js';
import { divide } from './divide.js';
import { multiply } from './multiply.js';

function main() {
  console.log(add(0.1, 0.2)); 
  console.log(subtract(5, 3)); 
  console.log(multiply(5, 3));
  console.log(divide(8, 2));
}

main();
