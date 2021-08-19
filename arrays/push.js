/**The push() method adds one or more elements to the end of an array 
  and returns the new length of the array.

 */

const { seasons}=require('./arrays')
const length=seasons.push('harvest', "winter") //returns length of array
console.log(length)//6
console.log(seasons)//[ 'spring', 'autumn', 'fall', 'summer', 'harvest', 'winter' ]