function findNeedle(haystack) {
  const needlePosition = haystack.indexOf("needle");
  return `found the needle at position ${needlePosition}`;
};

const hayStackArray = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

console.log(findNeedle(hayStackArray));