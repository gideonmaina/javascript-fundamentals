/**The pop() method removes the last element from an array
   and returns that element. This method changes the length of the array.
  */

 const { seasons}=require('./arrays')
 console.log(seasons) //[ 'spring', 'autumn', 'fall', 'summer' ]
 const element=seasons.pop()//returns popped element
 console.log(element)// summer
 console.log(seasons)//[ 'spring', 'autumn', 'fall' ]