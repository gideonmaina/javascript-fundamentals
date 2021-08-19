/**
The join() method creates and returns a new string by concatenating
 all of the elements in an array (or an array-like object),
separated by commas or a specified separator string.
 If the array has only one item, then that item will be returned
  without using the separator.
 */
/**
 SYNTAX
join()
join(separator)
 */
  const{ seasons}=require('./arrays')
  let joined=seasons.join();
  console.log(joined)//spring,autumn,fall,summer
  joined=seasons.join("");
  console.log(joined)//springautumnfallsummer 
  joined=seasons.join("*");
  console.log(joined)
  joined=seasons.join(" ");
  console.log(joined)
 