const eqArrays = function(arr1, arr2) {
  let isEqual = [];
  if (arr1.length !== arr2.length) {
    return false;
    

  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEqual.push(true);
      } else {
        isEqual.push(false);
      }
    }
  }
  if (isEqual.includes(false)) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Yep, these arrays are equal. ✅");
  } else {
    console.log("Nope, these arrays are not equal. 🔴");
  }
};

const flatten = function(arr) {
  const flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArr.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {

        flattenedArr.push(arr[i][j]);
      }
    }
  }
  return flattenedArr;
};

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4, 5], 6]), [1, 2, 3, 4, 5, 6]);

























