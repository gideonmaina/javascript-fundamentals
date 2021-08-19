/**
 The flat() method creates a new array with all sub-array elements 
 concatenated into it recursively up to the specified depth.
 */
/**
 *SYNTAX
 flat()
 flat(depth)
 depth Optional
The depth level specifying how deep a 
nested array structure should be flattened.
 Defaults to 1.
 */
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

const arr3 = [0, 1, 2, [[[3, 4]]]];

console.log(arr3.flat(3));
// expected output: [0, 1, 2, 3, 4]

