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
const digits = ["456785"];
const numbers = ["1", "2", "3", "4", "5"];
const letters = ["a", "b", "c", "d" ];
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(words, results1);

const result2 = map(letters, letter => letter[0]);
console.log(result2);
assertArraysEqual(letters, result2);

const result3 = map(numbers, number => number[0]);
console.log(result3);
assertArraysEqual(numbers, result3);
const result4 = map(digits, digit => digit[3]);
console.log(result4);
assertArraysEqual(digits, result4);