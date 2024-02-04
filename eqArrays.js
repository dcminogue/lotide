const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let isEqual = [];
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
       return false;
      }
    }
  }
   return true;
};

assertEqual(eqArrays([2, 3, 5, 6], [5, 6, 2]), false);
assertEqual(eqArrays([5, 6, 2], [5, 6, 2]), true);
assertEqual(eqArrays([2, 3, 5, 6], [5, 6, 2]), true);