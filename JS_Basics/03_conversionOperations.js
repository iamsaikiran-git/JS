let var1 =  "33"
console.log(typeof(var1))
console.log(typeof Number(var1)) 
var1 = Number(var1)    // for conversion use this syntax put the target type like Number which is a class name and then it gets converted if the conversion is valid
console.log(var1);
console.log(typeof var1);

console.log("--------------------------");

var1 = "33a"

let newValueinNumber = Number(var1)
console.log(newValueinNumber); //  this gives NaN which expands to Not a Number 
console.log(typeof newValueinNumber) //  Note: Type of NaN is also a Number 


let booleantoNumber = false
console.log(Number(booleantoNumber));// Conversion of proper boolean to number works well true => 1, false => 0
console.log(Number(!booleantoNumber));

let booleanStringToNumber = "True"
console.log(Number(booleanStringToNumber)); // conversion of string boolean value to number will be considered as a string itself
//"33" => 33
//"33abc" => NaN
//true => 1, false => 0
//"true" => NaN , "false" => NaN

//String to Boolean conversion
let someString = "sai"
console.log("sai -- "+ Boolean(someString));
someString  = ""
console.log("Empty String -- "+ Boolean(someString));
someString = null
console.log("null -- "+ Boolean(someString));
someString = undefined
console.log("Undefined -- "+ Boolean(someString));
someString = "Null"
console.log("Null text in a string -- "+ Boolean(someString));
// String to Boolean conversions Notes
// A string with some value inside it will be always true
// An empty string will be always false in boolean 
// A variable with null and Undefined values will always be false