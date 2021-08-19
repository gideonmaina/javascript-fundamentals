/**
 The forEach() method executes a provided 
 function once for each array element.

  Return Value =undefined
 */


 const {seasons}=require('./arrays')
 const formatted=seasons.forEach(season=>console.log(season.toUpperCase()))
 /** SPRING
 AUTUMN
 FALL  
 SUMMER
 */
 console.log(formatted)//undefined

 let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']