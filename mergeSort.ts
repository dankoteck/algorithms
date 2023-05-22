function merge(arrLeft: number[], arrRight: number[], arr: number[]) {
  let i = 0,
    iLeft = 0,
    iRight = 0;
  const leftSize = Math.floor(arr.length / 2);
  const rightSize = arr.length - leftSize;

  while (iLeft < leftSize && iRight < rightSize) {
    if (arrLeft[iLeft] < arrRight[iRight]) {
      arr[i] = arrLeft[iLeft];
      iLeft++;
    } else {
      arr[i] = arrRight[iRight];
      iRight++;
    }
    i++;
  }

  while (iLeft < leftSize) {
    arr[i] = arrLeft[iLeft];
    iLeft++;
    i++;
  }

  while (iRight < rightSize) {
    arr[i] = arrRight[iRight];
    iRight++;
    i++;
  }
}

function mergeSort(arr: number[]) {
  if (arr.length <= 1) {
    return;
  }

  // Merge sort
  let i = 0,
    iLeft = 0,
    iRight = 0;
  const pivot = Math.floor(arr.length / 2);

  const arrLeft: number[] = [];
  const arrRight: number[] = [];

  while (i < arr.length) {
    if (i < pivot) {
      arrLeft[iLeft] = arr[i];
      iLeft++;
      i++;
    } else {
      arrRight[iRight] = arr[i];
      iRight++;
      i++;
    }
  }

  mergeSort(arrLeft);
  mergeSort(arrRight);

  merge(arrLeft, arrRight, arr);
}

const arr = [38, 27, 43, 3, 9, 82, 10, 4, 1, 19, 28, 32, 90, 50, 7, 15];
mergeSort(arr);
console.log(arr);
