function getCount(str) {
  const splitString = str.split("");
  let counter = 0;

  splitString.forEach(element => {
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
      counter++;
    } 
  });

return counter;
}

console.log(getCount("abracadabra"));


// split the string into an array of strings
// for each item in the array check if it is a vowel
// if it is a vowel increase a counter by 1 
// once loop is complete return the counter total