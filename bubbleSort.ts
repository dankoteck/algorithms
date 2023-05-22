function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10, 4, 1, 19, 28, 32, 90, 50, 7, 15];
selectionSort(arr);
console.log(arr);
