import fruits from './foods';
import {choice, remove} from './helpers';

let fruit = choice(fruits);
console.log(`here u go: ${fruit}`);
let rem = remove(fruits, fruit);
console.log(rem.length);

