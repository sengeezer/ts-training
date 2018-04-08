// Search for specified element in (a sorted?) array and return its index
// Continually reduces probelm size, i.e. list of possible hits
function binarySearch(
  array: number[],
  el: number,
  start = 0,
  end = array.length - 1,
): number {
  if (end < start) {
    return -1;
  }
  // find the middle of the current section
  const middle = Math.floor((start + end) / 2);
  // determine which half to examine
  return el === array[middle]
    ? middle
    : el < array[middle]
      ? binarySearch(array, el, start, middle -1)
      : binarySearch(array, el, middle + 1, end);
}