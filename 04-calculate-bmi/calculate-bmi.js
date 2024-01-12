function bmi(weight, height) {
  const bmiValue = weight/(height*height);
  const roundedBMI = Math.round(bmiValue * 10) / 10;

  if(roundedBMI <= 18.5){
    return "Underweight";
  } else if (roundedBMI > 18.5 && roundedBMI <= 25.0) {
    return "Normal";
  } else if (roundedBMI > 25.0 && roundedBMI <= 30.0){
    return "Overweight";
  } else {
    return "Obese";
  }
}