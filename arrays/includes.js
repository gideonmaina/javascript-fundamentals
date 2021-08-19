/**
 The includes() method determines whether an array 
  includes a certain value among its entries,
  returning true or false as appropriate.
 */

  //syntax : includes(searchElement, fromIndex)
  /**fromIndex is optional :The position in this array at 
   which to begin searching for searchElement. 
  */
const{ford}=require('./arrays')
console.log(ford)//[ 'fiesta', 'focus', 'figo', 'aspire', 'ranger', 'oj' ]
console.log(ford.includes('focus'))//true
console.log(ford.includes('focus',2))//false
console.log(ford.includes('focus',-2))//false
console.log(ford.includes('focus',-6))//true