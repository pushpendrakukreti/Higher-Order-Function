const { users } = require('./store.js');
const arr = [2, 5, 6, 8, 11, 13];

/* Filter out odd values */

const isOdd = (param) => { return param % 2 }
console.log('Odd : ' + arr.filter(isOdd));

/* Filter out even values */

const isEven = arr.filter((param) => param % 2 === 0)
console.log('Even : ' + isEven);


/* ---------------------------------- */
/* Get users firstname whose age > 25 */

const output = users
.filter((e) => e.age > 25)
.map((e) => e.firstName);

console.log(output);

/* ---------------------------- */