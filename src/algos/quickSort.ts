// Sort an array using quick sort, a.k.a. partition sort, pivot sort

// args: initial state of array, start index, last index
// recursively modifies array without copying it / in place
function partition(array: number[], start: number, before: number): void {
  // length of partition
  const length = before - start;
  if (length <= 1) {
    return;
  }
  // Choose a pivot point and sort into:
  // items less than pivot, idx for pivot rank, items greater than pivot,
  // idx for curr item, items not yet examined
  
  const pivotIndex = start + Math.floor(Math.random() * length);
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  const pivot = array[start];
  let pivotRank  = start;
  for (let i = start + 1; i < before; i++) {
    if (array[i] < pivot) {
      pivotRank++;
      [array[i], array[pivotRank]] = [array[pivotRank], array[i]];
    }
  }
  // Place pivot point at the beginning of the array subsection to avoid having to move it (?)
  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
  }

  // order targeted is now: items < pivot, pivot, items > pivot

  // sort each ends independently
  partition(array, start, pivotRank);
  partition(array, pivotRank + 1, before);
}

function quickSort(array: number[]): number[] {
  array = array.slice();
  partition(array, 0, array.length);
  return array;
}