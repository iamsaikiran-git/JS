"use strict"  //used to force the user to use latest JS standards and syntaxes
var x = 123
console.log(x)

// Things that are allowed in non strict mode 
// y = 2134  this forces to explicitly declare the variables using let keyword or var
// delete y usually js had this ability to delete variables and functions but not with strict mode
// fun foo(a,a) old js has ability to have duplicate variable names in function parameters 
// var eval, var arguments   -- HEre eval and arguments are keywords in js and old js used to allow them to be used as variable names but in strict mode it's restricted and gives error

//docs link https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
//ECMA script is a global standards controlling organization for Java scrit who decides the syntaxes and few special outcomes of JS
// for example outcome of a undefined type etc

//Main datatypes 
//number => similar to int datatype in other languages
//bigint =>mostly not used but its used for huge integer numbers 
// string  => "" mostly used for string values in java script
// boolean => used for true /false
// null => is also a special value in java script and it's of type object
// undefined => is a type in java script which ever variable is not defined then it's of type undefined
// symbol => unique


let y = 1234
console.log("Number type of Y " + typeof y);
y = "Hello"
console.log("String type of Y " + typeof y); //  type in java script can be easily changed an flexible and dependent on the value that the variable holds in the memory

console.log(typeof "sai"); // type of keyword is used  to get the type of mentioned variable 
console.log(typeof 12);
console.log(typeof 1234567890123456789123);
console.log(typeof null); //  Special Case : null is of type object in java script ex:  getting temperatuer if error it should give null in other cases consider it gives 0 the 0 is also a temperature then it is wrong 
console.log(typeof undefined); // Special Case : undefined is of type undefined itself 

