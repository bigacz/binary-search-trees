function mergeSort(array) {
  if (array.length === 0) {
    return;
  }
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);

  const first = array.slice(0, middle);
  const second = array.slice(middle);

  const firstSorted = mergeSort(first);
  const secondSorted = mergeSort(second);
  const sorted = merge(firstSorted, secondSorted);

  return sorted;
}

function merge(first, second) {
  const sortedArray = [];

  while (first.length > 0 && second.length > 0) {
    let element;
    if (first[0] <= second[0]) {
      element = first.shift();
    } else {
      element = second.shift();
    }
    sortedArray.push(element);
  }

  let returnArray;
  if (first.length > 0) {
    returnArray = sortedArray.concat(first);
  }

  if (second.length > 0) {
    returnArray = sortedArray.concat(second);
  }

  return returnArray;
}

export default mergeSort;
