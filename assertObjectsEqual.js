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
    return true;
  }
};



const assertObjectsEqual = function(obj1, obj2) {
  //  Created a variable that holds the inspect().
  const inspect = require('util').inspect;
  
  if (eqObjects(obj1, obj2) === true) {
    console.log(`Yep, ${inspect(obj1)} and ${inspect(obj2)} are equal. ✅`);
  } else {
    console.log(`Nope, ${inspect(obj1)} and ${inspect(obj2)} are not equal. 🔴`);
  }
};

const obj1 = {1:"a", 2:"b"};
const obj2 = {1:"a", 2:"b"};
assertObjectsEqual(obj1, obj2);
const obj3 = {1:"c", 2:"c"};
const obj4 = {1:"a", 2:"b"};
assertObjectsEqual(obj3, obj4);

module.exports = assertObjectsEqual;