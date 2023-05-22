function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let val = arr[i];

    while (j >= 0) {
      if (arr[j] > val) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      j--;
    }
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10, 4, 1, 19, 28, 32, 90, 50, 7, 15];
insertionSort(arr);
console.log(arr);
