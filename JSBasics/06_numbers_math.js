let score = 100
console.log(score);

let someNumber = new Number(1234) // gives prototype methods which comes with number object thats the advantage from literanl number to number object
console.log(someNumber);

console.log(someNumber.toString().length);
const num2  = 123.69
// To Fixed method
console.log(someNumber.toFixed(3)); //  gives the number of digits after the decimal point in a number 
console.log(num2.toFixed(1)); //  This also rounds off to the nearest possible number in previous digit


// to precesion method
let percesionExample = 129.567
console.log(percesionExample.toPrecision(4));// precision method will round off the whole number to the givennumber of digits in the parameter like as given in above example

// to locale string 
let num3 = 1000000
console.log(num3.toLocaleString('en-In')) // converts the numeric representation o the given country preference

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);



// ----------------- Maths -------------------------

// Maths library comes within the java script language itself
console.log(Math.PI);
console.log(Math.round(4.6)); //  rounds off the given decimal value
console.log(Math.ceil(5.1));
console.log(Math.floor(5.1));
console.log(Math.max(1,2,3,4,5,6,7));
console.log(Math.min(1,2,3,4,5,6,7));

console.log(Math.random());
let min = 5
let max = 10
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
