/**
 The lastIndexOf() method returns the last index at which a given 
 element can be found in the array, or -1 if it is not present. 
 The array is searched backwards, starting at fromIndex
 */

 /**
  SYNTAX
  lastIndexOf(searchElement)
  lastIndexOf(searchElement, fromIndex)
  */

  const{redundant}=require('./arrays')
  console.log(redundant)//['bmw','toyota',3,'ford','toyota','3',4,'benz','bmw',4]
  console.log(redundant.lastIndexOf(4))//9
  console.log(redundant.lastIndexOf(4,-2))//6