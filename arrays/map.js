/**
 The map() method creates a new array populated with the results 
 of calling a provided function on every element in the calling array.
 */
/**
 SYNTAX
 map((element, index, array) => { ... } )
 map(callbackFn, thisArg)
 map(function callbackFn(element, index, array) { ... }, thisArg)


 */


const numbers=[1,4,9,16]
const sqrt=numbers.map(num=>Math.sqrt(num))
console.log(sqrt)//[ 1, 2, 3, 4 ]