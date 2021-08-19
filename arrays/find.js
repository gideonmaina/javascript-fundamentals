/**
 The find() method returns the value of the first element 
 in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.
 */

const {redundant}=require("./arrays")
console.log(redundant)
let findElement=redundant.find(element=> element==="3")
console.log(findElement, typeof findElement)// 3 string
findElement=redundant.find(element=> element=="3")
console.log(findElement, typeof findElement)// 3 number