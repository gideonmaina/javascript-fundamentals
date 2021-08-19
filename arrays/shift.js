/**
 The shift() method removes the first element from an array 
 and returns that removed element.
 This method changes the length of the array
 */

 const {seasons}=require('./arrays')
 console.log(seasons)//[ 'spring', 'autumn', 'fall', 'summer' ]
 const removedElement=seasons.shift()
 console.log(removedElement)// spring
 console.log(seasons)//[ 'autumn', 'fall', 'summer' ]

