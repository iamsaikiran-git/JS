// Objects are of 2 types 
// literal objects which are defined then and there with curly braces
// singleton objects which are defined through constructors

let myObj = {
    name:"Saikiran",
    age : "24",
    Location : "Bangalore",
    email : "sai1123251@gmail.com",
    "Full Name" : "Chinta Saikiran"
}

console.log(myObj);

// Accessing objects are of 2 types
console.log(myObj.age) // these kind of references using dot can be done to only the keys which doesn't have the space in between them
console.log(myObj["age"])  // these kind of references is safe as it handles both the keys with and without any spaces
console.log(myObj["Full Name"]); 

let mySymbol = Symbol("Mysymbol")
let myObj1 = {
    name:"Saikiran",
    age : "24",
    Location : "Bangalore",
    email : "sai1123251@gmail.com",
    "Full Name" : "Chinta Saikiran",
     [mySymbol] : "Real Symbol"        // here even if we use the same key name as the symbol but still the type of it will be string
}
console.log(myObj1[mySymbol]); // even while accessing you need not put the name inside of the braces as a string
console.log(myObj1);

// We can freeze a fobject so that no changes can be made to that object after freezing 
// Object.freeze(myObj1)
// myObj1["Full Name"] = "";  // this change doesn't reflect because we froxe the object 
// console.log(myObj1);
// we can also add functions inside a JS object 

myObj1.greeting = function()
{
    console.log(`Hello JS user ${this.name}`);
}

myObj1.greeting();