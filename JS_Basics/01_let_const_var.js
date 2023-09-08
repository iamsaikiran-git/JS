// Declaring variables in JS is as foloowing ways
const employeeId = "12345"   // If declared once cannot be changed
let employeeName = "Saikiran" // If declared can be changed and also most used declaration way most of the time
var empolyeeDesignation = "Sofware Engineer" // It's an old method of declaration for JS still works but not recommended because of scope issues
employeeCity = "Bangalore" // It works wen you declare variables like this too but it's not recommended because not a good practice

console.table([employeeId,employeeName,empolyeeDesignation,employeeCity]) // using table will help to print the valuesin a single line of code and also out puts the result in form of a table which looks good for debugging


/* There's a story with var and let 
Both looks same in the terms of positive outlook of working in code but they're not 
Var is the first used keyword in earlier versions of Java script to declare the variables 
the issue with var was it doesn't used to follow any strict scope related rules
Like a variable declared in a scope was accessible out of that scope as well 

This obviously is not a good practice so later it has been evident that JS needs a way to follow proper scope 
then they've introduced the let keyword through which you can declare a variable scope properly and access it 
*/

if(true)
{
    let x = 200
    console.log(x);
}
// console.log(x);  Accessing x here throws an error because x has already been declared in if condition


let x = "something" // it can be declared here again because this is with outer scope 
console.log(x);


// Trying the same thing with var

if(true)
{
    var q = "Hello"
    console.log(q);
}

console.log(q); //  Accessing q here is possibl because of the same reason above that var doesn't follow any scope


// Playing around with var and let

if(true)
{
    var w = 1
    console.log(w);
}
//let w = 123  this line will throw error because once a variable name has been declared with var then you can't declare the same with let 
w = "variable type Changing" //  once declared the variable type can easily be changed for var 
console.log(w);


// Trying to change variable type with let

let qwe = 1234
qwe = "Change the type"
console.log(qwe); //  once declared the variable type can easily be changed in JS either with Var or let


// Try declaring var again out of scope

if(true)
{
    var qwer = 123
    console.log(qwer);
}

var qwer = 12345 //  var can be declared in multiple scopes without having any error 
console.log(qwer);

var qwer = "Change variable type" // variable type can also be modified inline without any effect and error on the code
console.log(qwer);