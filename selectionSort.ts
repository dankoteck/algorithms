function insertionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let iMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[iMin]) {
        iMin = j;
      }
    }

    if (iMin !== i) {
      [arr[iMin], arr[i]] = [arr[i], arr[iMin]];
    }
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10, 4, 1, 19, 28, 32, 90, 50, 7, 15];
insertionSort(arr);
console.log(arr);
