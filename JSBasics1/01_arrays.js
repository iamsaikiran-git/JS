let myArr = [1,2,3,4,5]
let myMixedArr = [1,2,3,4,"Sai"] // mixed data type elements are allowed in a js array
let arrayConstructorDeclare = new Array(12,3,4,56,7)

console.log(myArr);
console.log(myMixedArr);
console.log(arrayConstructorDeclare);


//insertion operations
// push operation adds the given new element at the end and returns the new length of the array
// pop operation removes the last element of the array if present and returns that element 
myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);

//shift and unshift are similarly opposite to push and pop
// Shift is used to remove the given value in the beginning return the removed first element of the array
// Unshift is used to insert the value at 0th index  returns the length of the modified array after inserting
console.log(myArr.unshift(0));
console.log(myArr);
console.log(myArr.shift());
console.log(myArr);

// includes method returns boo is the value is present or nor
// indexof method return the index of the given element of the array and if element not present returns -1
console.log(`includes method ${myArr.includes(3)}`);
console.log(`indexof element 3 in ${myArr} is ${myArr.indexOf(3)}`);
console.log(`indexof method without the element in array ${myArr.indexOf(13)}`);

// join method joins the elements in the array and retrns the string 
// by default it joins with comma but if we give some parameter it joins with that
let joinedstring = myArr.join("-")
console.log(`Join method of array ${myArr} joined as ${joinedstring}`);

// slice method in js for arrays will only return hat portion of the array mentioned in the indices
// splice method in js includes the start and end index as well unlike slice which excludes the end index and returns the mentioned portion and also removes that portion from the original array 
// NOTE : splice method is only associated with arrays and not with strings

let myArr1 = new Array(0,1,2,3,4)
let myArr2 = new Array(0,1,2,3,4)

console.log("myArr1" , myArr1);
console.log ("Slice Operation" ,myArr1.slice(1,3))
console.log("myArr1" , myArr1);

console.log("myArr2", myArr2);
console.log ("Splice Operation" ,myArr2.splice(1,3))
console.log("myArr1" , myArr2);