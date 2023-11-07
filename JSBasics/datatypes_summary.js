"usestrict"
// Primitive Datatypes --  call by value
// String
// Number
// Boolean
// null
// undefined
// BigInt
// Symbol -- Wrapping reusable components ni a symbol to make it useful for easily at multiple places


// Reference Types(Non primitive): -- when passed 
// Array
// Objects
// Functions


//Javascript is a dynamically typed language since we're not defined the datatypes or anything anywhere explicitly it's taking number datatype by itself
const score = 100
console.log(typeof score);
const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = false // boolean
const outsideTemperature = null // null is a datatype

let userEmail = "saikiran@gmail.com" // let is alsoanother waty of defining a variable

// Symbol is also another primitive datatype in JS and used to definee unique values wiwth whatever you pass in it as below example we passed a string in symbol constructor
const id = Symbol("123")
const anotherId = Symbol("123") // passing another id is also a way of do this defined symbol is with same value but is considered as a different entity altogether

console.log(id === anotherId); // false



const bigNumber= 123456782837462376293n // used to store huge number. Adding a n as suffix makes the number as big int


const heroes = ["cricket","hockey","basketball"]

let personalDetailsObject  = 
{
    name:"Saikiran",
    age: 23,
    location : "Bangalore",
    occupation : "Software Engineer"
}

console.log(personalDetailsObject.name);
personalDetailsObject.name= "Saikiran Chinta"
console.log(personalDetailsObject.name);
greet("Saikiran");

function greet(name)
{
    console.log(`Hello ${name}`);
}

// function can also be wrapped inside a variable and used it 
let greet1 = function (name)
{
    console.log(`Hello ${name}, Welcome`);
}

greet1("Saikiran Chinta")

console.log(typeof greet);
