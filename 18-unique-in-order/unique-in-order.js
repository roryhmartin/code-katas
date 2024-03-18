function uniqueInOrder(iterable){
  if(iterable == null) {
    return "Null";
  }
  
  const splitInput = Array.isArray(iterable) ? iterable : iterable.split("");
  let uniqueArray = [];

  for(let i = 0; i < splitInput.length; i++) {
    if(splitInput[i] === uniqueArray[uniqueArray.length - 1]){
      continue
    } else {
      uniqueArray.push(splitInput[i]);
    }
  }
    return uniqueArray;
}


console.log(uniqueInOrder([1,2,2,3,3]));

// split input into an array 
// iterate over the array
// push items to new array
// if the current item is the same as last item in new array, continue