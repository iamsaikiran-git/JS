let value = 3
let negValue = -value
console.log(negValue);

//Normal Arithematic operators work similar to othe rlanguages  +,-,*,**,/,%
console.log(Math.floor(Number(2/3))); // Division is floating point division so you need to convert according to your needs


// String concatenation is similar to java and python
console.log("sai"+ "Kiran");

console.log(1+2)
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2"+3);
console.log(1+2+"3");   //precedence of the initial variable type in the beginning does matterin computation

console.log(1+true) // gives 2 since true internally has 1 integer value
console.log(2**"") // 2 power 0 is 1 

console.log("----------  Comparisions and related operators -------------------");
// Comparision of data types and  few miscellaneous cases
console.log(null > 0); // False
console.log(null == 0); // False
console.log(null >= 0); // True 
// Reason : the comparision and equality checks work differently in javascript that's why they give different result in third case comparision operator actually converts null to 0 while comparing 

console.log(undefined > 0); // False
console.log(undefined == 0); // False
console.log(undefined >= 0); // False   // the above case is only miscellaneous to null type and not for undefined type 



console.log("-------- Strict Check --------------");

console.log("2" === 2); // This checks the data type also along with the value of the things in question
console.log("2" == 2); // This tries to get the value by converting the data type to possible conversion preference of either types and then compare and give the results
