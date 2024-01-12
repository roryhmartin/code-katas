function countSheeps(sheep) {
  let sheepCount = 0;
  let negative = 0;
  
  sheep.forEach((isSheep) => {
    if(isSheep === true) {
      sheepCount++
    } 
  })
  return sheepCount;
}

const exampleArray = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

console.log(countSheeps(exampleArray));