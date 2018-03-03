// MS is another recursive algorithm

// conquer
function merge(left: number[], right: number[]): number[] {
  const arr: number[] = [];
  let lIdx = 0;
  let rIdx = 0;

  while (lIdx + rIdx < left.length + right.length) {
    const lItem = left[lIdx];
    const rItem = right[rIdx];

    if (lItem == null) {
      arr.push(rItem);
      rIdx++;
    } else if (rItem == null) {
      arr.push(lItem);
      lIdx++;
    } else if (lItem < rItem) {
      arr.push(lItem);
      lIdx++;
    } else {
      arr.push(rItem);
      rIdx++;
    }
  }

  return arr;
}

// divide
function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }
  // split array in 2 & sort recirsively
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);


  
  return merge(mergeSort(left), mergeSort(right));
}