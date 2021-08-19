/**
 *The concat() method is used to merge two or more arrays. 
 This method does not change the existing arrays, but instead returns a new array.
 */

 const {ford,toyota}=require('./arrays')
 console.log(ford)//[ 'fiesta', 'focus', 'figo', 'aspire', 'ranger', 'oj' ]
 console.log(toyota) 
/** 
[
    'camry',   'crown',
    'corolla', 'prius',
    'avalon',  'yarris',
    'Passo'
  ]

 */ 
 const cars=ford.concat(toyota)
 console.log(cars)
 /**
  [
  'fiesta',  'focus',
  'figo',    'aspire',
  'ranger',  'oj',
  'camry',   'crown',
  'corolla', 'prius',
  'avalon',  'yarris',
  'Passo'
]
  */