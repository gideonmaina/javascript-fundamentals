/**
 The filter() method creates a new array with all elements
 that pass the test implemented by the provided function.
 */

 const {ford}=require('./arrays')
 console.log(ford)//[ 'fiesta', 'focus', 'figo', 'aspire', 'ranger', 'oj' ]
 const startsWithF=ford.filter(car=>car[0]==="f")
 console.log(startsWithF)//[ 'fiesta', 'focus', 'figo' ]
 