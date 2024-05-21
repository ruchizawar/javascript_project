let score = "33" // "33abc" / null / undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

/* 
"33" => 33
"33abc" => NaN 
null => 0
undefined => NaN
*/

let somenum = 33
let stringNum = String(somenum)
console.log(typeof stringNum);
console.log(stringNum);