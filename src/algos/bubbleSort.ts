// during each iteration, move highest number to the end
// appropriate for use on small arrays
function bubbleSortConcept(array: number[]): number[] {
  array = array.slice();
  for(let i = 0; i < array.length; i++) {
    // end iteration at length - 1 so as to not overrun with j+1
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  return array;
}

bubbleSortConcept([4, 3, 2, 1]);

// Idiomatic version
function bubbleSort(array: number[]): number[] {
  array = array.slice();
  while (true) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return array;
}