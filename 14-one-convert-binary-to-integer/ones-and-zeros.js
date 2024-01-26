const binaryArrayToNumber = arr => {
    const binaryString = arr.join("");
    return parseInt(binaryString, 2);
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));