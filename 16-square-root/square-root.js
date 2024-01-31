function isSquareNumber(number) {
  // calculate the square root of number, if it is a number, stores an integer, if it is not square, stores NaN
  const root = Math.sqrt(number);

  // return True if root is an integer or false if otherwise
  return Number.isInteger(root);
}

console.log(isSquareNumber(10));