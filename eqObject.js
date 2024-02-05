const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Creating variables to store the array of keys. .sort() used to put arrays in same order.
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  // Uses eqArrays function to check if arrays are equal.
  const ifKeysEqual = eqArrays(keys1, keys2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (!ifKeysEqual) {
    return false;
  }
  // Creating variables to store the array of values. .sort() used to put arrays in same order.
  const values1 = Object.values(object1).sort();
  const values2 = Object.values(object2).sort();
  // Uses eqArrays function to check if arrays are equal.
  const ifValuesEqual = eqArrays(values1, values2);
 
  if (values1.length !== values2.length) {
    return false;
  }
  if (!ifValuesEqual) {
    return false;
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
// Uses assertEqual function to check that eqObjects actual return = expected return.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const test1 = { size: 6, color: true, sleeveLength: undefined };
const test2 = { size: 6, color: true, sleeveLength: undefined };
assertEqual(eqObjects(test1, test2), true); // => true

