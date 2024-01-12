function abbrevName(name){

	const splitName = name.split(" ");
  const initialsArray = splitName.map((word) => word.charAt(0).toUpperCase());
  const initials = initialsArray.join('.')
  return initials;

}

console.log(abbrevName("Rory Martin"));