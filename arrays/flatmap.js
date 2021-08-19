/**
The flatMap() method returns a new array formed by applying 
a given callback function to each element of the array, 
and then flattening the result by one level. 
It is identical to a map() followed by a flat() of depth 1, 
but slightly more efficient than calling those two methods separately.
 
 */

const numbers=[1,4,9,16]
let sqrt=numbers.flatMap(num=>[Math.sqrt(num)])
console.log(sqrt)//[ 1, 2, 3, 4 ]
sqrt=numbers.flatMap(num=>[[Math.sqrt(num)]])
console.log(sqrt)//[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]