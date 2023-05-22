// Using iterative
function binarySearchIterative(arr: number[], search: number) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);
    if (search === arr[pivot]) {
      return pivot;
    }

    if (search < arr[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return -1;
}

// Using recursive
function binarySearchRecursive(
  arr: number[],
  search: number,
  left: number,
  right: number
): number {
  if (left > right) {
    return -1;
  }

  const pivot = left + Math.floor((right - left) / 2);

  if (search === arr[pivot]) {
    return pivot;
  }

  if (search < arr[pivot]) {
    return binarySearchRecursive(arr, search, left, pivot - 1);
  }

  return binarySearchRecursive(arr, search, pivot + 1, right);
}

const arr = [38, 27, 43, 3, 9, 82, 10, 4, 1, 19, 28, 32, 90, 50, 7, 15].sort(
  (a, b) => a - b
); // assume that the array is sorted

console.log(binarySearchRecursive(arr, 8, 0, arr.length - 1));
