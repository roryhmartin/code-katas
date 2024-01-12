function digitize(n) {
	
  const array = Array.from(String(n), Number);
  const reversedArray = [];
  
  for(let i = array.length - 1; i >= 0; i--) {
  	const currentDigit = array[i];
    reversedArray.push(currentDigit);
  }
  return reversedArray;
}

console.log(digitize(35231));