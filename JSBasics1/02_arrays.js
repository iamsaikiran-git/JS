let superCars = ["Ferrari","Lambhorgini","Pagani"]
let suvCars = ["Harrier", "LandCruiser", "Velar", "Discovery"]

//superCars.push(suvCars)   this just adds the array within the existing array creating a nested array

console.log(superCars); //  arrays are like wild cards in js anything can be added inside them 
//console.log(superCars[3][2]); //  like this you can access the nested arrays also inside an array 

// To avoid adding the nested arrays in this way we can use the concat method 
// Note: concat method doesn't modify any of the existing arrays it concats the given 2 arrays and returns the new array object

let mixedCarsArray = superCars.concat(suvCars)
console.log("Array with concat", mixedCarsArray);


// another very useful way to combine 2 arrays is using the spread operator "..." 
// NOTE : adbvanage of using spreadoperator is you can concat multiple array at same time and it's user friendly

let spreadOperatorMixedArray = [...superCars,...suvCars]
console.log("Array with spread operator" ,spreadOperatorMixedArray);


// flat  --  will flatten the array if there are nested array elements in it and you can also pass parameter in this as until what depth it should be flattened
// isarray -- Array.isArray() checks if the given parameter is an array or not
// from -- Array.from() accepts the parameters which are iterable objects and returns a new array as theor iterable items as elements of the array
// of -- Array.of()  accepts the parameters given inside the paramtheses and forms an array with those and returns a new array 


let nestedArrayVariable = [1,2,3,4 , [5,6,7],[8,9,10,11,12,13,[14,15,16]]]

console.log("Flattening the nested array object", nestedArrayVariable.flat(Infinity));

console.log("isArray method in static array reference", Array.isArray("Saikiran"));

console.log("From method in arrays ",Array.from("Saikiran"));

console.log("Of method from array static reference",Array.of(superCars,suvCars,mixedCarsArray));