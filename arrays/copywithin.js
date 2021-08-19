/**
 The copyWithin() method shallow copies part of an array to another
 location in the same array and returns it without modifying its length.
 */

 /**
  Syntax:
    copyWithin(target)
    copyWithin(target, start)
    copyWithin(target, start, end)


start {Optional} default=0
Zero-based index at which to start copying elements from. 
If negative, start will be counted from the end.

end {Optional}
Zero-based index at which to end copying elements from. 
copyWithin copies up to but not including end. 
If negative, end will be counted from the end.

  */

const{toyota}=require('./arrays')
console.log(toyota)//['camry','crown','corolla','prius','avalon','yarris','Passo']

// copy to index 0 the element at index 3
console.log(toyota.copyWithin(0, 3, 4));//['prius','crown','corolla','prius','avalon','yarris','Passo']

// copy to index 1 all elements from index 4 to the end
console.log(toyota.copyWithin(1, 4));//[ 'prius','avalon','yarris', 'Passo','avalon','yarris','Passo']
