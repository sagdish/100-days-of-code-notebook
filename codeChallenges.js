// Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.


function findPairs(arr, num) {
  const result = []

  for(let i = arr.length -1; i >= 1; i--) {
    const currentI = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      const currentJ = arr[j];
      if (currentI + currentJ === num) {
        result.push([currentI, currentJ]);
      } 
    }
  }

  return result;
}

findPairs([3, 5, 2, -4, 8, 11], 7)

// Goal to do with O(n) or O(nlogn)
