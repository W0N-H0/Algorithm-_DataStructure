const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left < right) {
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1; // not found
}

console.log(binarySearch(array, 2876)); // 7
console.log(binarySearch(array, 1)); // 1
console.log(binarySearch(array, 500)); // -1  -> not found
