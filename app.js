function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }

  function mergeArrays(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item)).concat(arr2).sort((a, b) => a - b)
  }