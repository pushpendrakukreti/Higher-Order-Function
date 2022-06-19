const { users } = require('./store.js');
const arr = [2, 3, 4, 6, 8, 11, 18, 33];

/* we use reduce function when we want to perform action 
on multiple values to get single output value */

/* Find sum of array elements */
const sumArr = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);

console.log('Sum = ' + sumArr);

/* Find max from array */
const maxArr = arr.reduce((max, curr) => {
    max = (curr > max ? curr : max);
    return max;
}, 0);

console.log('Max = ' + maxArr);


/* ---------------------------------- */
/* Get user counts group by age */

const output = users.reduce((acc, curr) => {
    acc[curr.age] = (acc[curr.age] ? ++acc[curr.age] : 1);
    return acc;
}, {});

console.log(output);

/* ---------------------------- */

const output2 = users.reduce((acc, curr) => {
    curr.age > 25 ? acc.push(curr.firstName) : '';
    return acc;
}, []);

console.log(output2);