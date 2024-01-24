var summation = function (num) {
  let sum = 0;

  for(let i = 1; i <=num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(3));

// create an array 
// have it start at 1
// use a for loop? use i to itterate until input
// while iterating, add the last 2 numbers of array together