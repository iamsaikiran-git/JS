const myName = new String("Saikiran - Chinta")
console.log(myName[0]); // String objects can also be accessed through indexing
console.log(myName.__proto__);  // prototype can be used in advances string modification things in javascript

console.log(myName.length); // gives the length of the string
console.log(myName.toUpperCase());  // converts the string to uppercase but doesn't change the actual string

console.log(myName);

console.log(myName.substring(0,5)); // similar to substring in other lang but not works with negative indexing
console.log(myName.slice(-11,8)); // if the starting index is less than the ending index then it works properly but with negative indexing the start index is [past the ending index then it gives empty string


const anotherName = "      Saikiran with Spaces       "
console.log(anotherName.trim());
console.log(anotherName.length);
console.log(anotherName.trim().length);  //  trim only works with the empty space characters only in both starting and ending


const oneMoreName = "I am a SoftwareEngineer"
console.log(oneMoreName.replace(" ","-")) // replaces the first occurance only
console.log(oneMoreName.replace(/ /g,"-")) // the regular expression / /g indicates the global replace of the given character in the given string so it checks for all the space characters and replaces them with hyphen there
let stringArray = oneMoreName.replace(/ /g,"-").split("-")
console.log(stringArray[0]);
