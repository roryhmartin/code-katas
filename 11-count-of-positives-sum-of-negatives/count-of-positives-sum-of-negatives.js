function countPositivesSumNegatives(input) {
  if(input === null || input === undefined || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let sumNegatives = 0;
  let countSumArray = [];

  for(let i = 0; i < input.length; i++){
    if(input[i] > 0) {
      positiveCount++;
    } else if(input[i] < 0) {
        sumNegatives += input[i]
    }
  }

  countSumArray.push(positiveCount);
  countSumArray.push(sumNegatives);

  return countSumArray;
};

let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegatives(exampleArray));