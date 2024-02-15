const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // Checks if length of arrays are equal. If not returns false.
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // Checks if items at each index are equal. If not returns false.  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
       return false;
      }
    }
  }
  // If all items at each index are equal it returns true. 
  return true;
};

assertEqual(eqArrays([2, 3, 5, 6], [5, 6, 2]), false);
assertEqual(eqArrays([5, 6, 2], [5, 6, 2]), true);
