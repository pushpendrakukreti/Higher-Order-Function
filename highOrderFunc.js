const radius = [3, 6, 2, 4];

/* ---------- Formulas ----------- */

const area = function (radius) {
    return (Math.PI * radius * radius).toFixed(2);
}

const circumference = function (radius) {
    return (2 * Math.PI * radius).toFixed(2);
}

const diameter = function (radius) {
    return (2 * radius).toFixed(2);
}

/* -------------------------------- */

/* ---------- High Order Function ----------- */

const calculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

/* ------------------------------------------ */

/* ---------- Using map() function ----------- */

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

/* ----------------------------------------------------------------- */

/* ---------- High Order Function same as map() function ----------- */

Array.prototype.calculative = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculative(area));
console.log(radius.calculative(circumference));
console.log(radius.calculative(diameter));

/* ----------------------------------------------------------------- */