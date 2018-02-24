// regular js Array.sort mutates original array, thus:
// 1. make unmutatable
const origArr: ReadonlyArray<string> = ['food', 'bard'];
// 2. copy arr
const copiedArr = origArr.slice().sort();

console.log(`Original: ${origArr}\nCopied: ${copiedArr}`);

// Only good for letters though.. For numbers:
console.log([1, 33, 24].sort((a, b) => a - b));

// Array of objects:
// arr.sort((a, b) => a.item - b.item);
// console.log(arr.map(j => j.item));
// (b, a) for descending