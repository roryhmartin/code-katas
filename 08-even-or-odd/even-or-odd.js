function evenOrOdd(number) {
  if(number % 2 === 0) {
    return "Even";
  } else if( number % 2 != 0) {
    return "Odd";
  } else {
    return "Enter an integer";
  }
}

console.log(evenOrOdd(5));