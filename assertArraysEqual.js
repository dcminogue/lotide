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
assertArraysEqual([1, 10, 50], [1, 10, 50]);
assertArraysEqual(["Rainbows", "Sky"], ["Blueberry", "Pie"]);
assertArraysEqual(["john"], ["John"]);
assertArraysEqual(["Victory", 17], ["Victory", 17]);
