/**
 The fill() method changes all elements in an array to a static value, 
 from a start index (default 0) to an end index (default array.length). 
 It returns the modified array.
 */


 /**
  Syntax
  fill(value, start, end)

 value
Value to fill the array with.

start Optional
Start index, default 0.

end Optional
End index, default arr.length
  */
 let {ford}=require('./arrays.js')
 console.log(ford)//[ 'fiesta', 'focus', 'figo', 'aspire', 'ranger', 'oj' ]
 let fill=ford.fill("bronco")
 console.log(fill)//[ 'bronco', 'bronco', 'bronco', 'bronco', 'bronco', 'bronco' ]
 ford=[ 'fiesta', 'focus', 'figo', 'aspire', 'ranger', 'oj' ]
  fill=ford.fill("ecosport",1,4)
 console.log(fill)//[ 'fiesta', 'ecosport', 'ecosport', 'ecosport', 'ranger', 'oj' ]