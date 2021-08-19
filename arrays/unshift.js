/**
The unshift() method adds one or more elements to the beginning of an array 
and returns the new length of the array.
 */

//opposite of array.push()
 const {seasons}=require('./arrays')
 console.log(seasons)//[ 'spring', 'autumn', 'fall', 'summer' ]
 const newLength=seasons.unshift("winter")
 console.log(newLength)// 
 console.log(seasons)//[ 'winter', 'spring', 'autumn', 'fall', 'summer' ]
 