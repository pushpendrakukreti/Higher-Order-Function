const {users} = require('./store.js');

const arr = [2, 3, 4, 5, 6];
console.log('Original : ' + arr);

/* Double the array values */

// const double = (param) => { return (param * 2) }
// console.log('Double : ' + arr.map(double));

const double = arr.map((x) => x * 2);
console.log('Double : ' + double);

/* ----------------------- */

/* Tripple the array values */

const tripple = (param) => { return (param * 3) }

console.log('Tripple : ' + arr.map(tripple));

/* -------------------------- */

/* Binary values of the array */

const binary = (param) => { return (param.toString(2)) }

console.log('Binary : ' + arr.map(binary));

/* -------------------------- */


/* ---------------------------------- */
/* Get Fullname from array of objects */

console.log(users.map((e) => e.firstName + " " + e.lastName));

/* ---------------------------------- */