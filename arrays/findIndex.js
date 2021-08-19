/**
 The findIndex() method returns the index of the first element
  in the array that satisfies the provided testing function.
  Otherwise, it returns -1, indicating that no element passed the test.
 */

/**
  SYNTAX
 findIndex((element, index, array) => { ... } )
 findIndex(callbackFn, thisArg)
 findIndex(function callbackFn(element, index, array) { ... }, thisArg)
 */

const {redundant}=require("./arrays")
console.log(redundant)
let index=redundant.findIndex(element=> element==="3")
console.log(index)// 5  :3 is string at index 5
index=redundant.findIndex(element=> element==3)
console.log(index)// 2  :3 is number at index 2
index=redundant.findIndex(element=> element==47)
console.log(index)// -1 : no such element exists