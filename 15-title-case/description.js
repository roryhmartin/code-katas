function titleCase(str) {
  let lowerCase = str.toLowerCase();
  let stringToArray = lowerCase.split(" ");
  let titleCase = stringToArray.map( (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } );

  return titleCase.join(" ");
}

console.log(titleCase("How can mirrors be real if our eyes aren't real"));