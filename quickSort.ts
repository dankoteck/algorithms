function partition(arr: number[], left: number, right: number): number {
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < arr[right]) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}

function quickSort(arr: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }

  const middle = partition(arr, left, right);

  quickSort(arr, left, middle - 1); // all the lefts
  quickSort(arr, middle + 1, right); // all the rights
}

const arr = [38, 27, 43, 3, 9, 82, 10, 4, 1, 19, 28, 32, 90, 50, 7, 15];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
