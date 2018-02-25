const ciArr = [
  'alpha',
  'Beta',
  'Gamma',
  'delta',
  'epsilon',
];

// case insensitive sort
const sorted = ciArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(sorted);