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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Yep, these arrays are equal. ✅");
  } else {
    console.log("Nope, these arrays are not equal. 🔴");
  }
};

const letterPositions = function(sentence) {
  // Empty object to hold key value pair of the letters and their positions.
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // Variable to hold current letter in sentence parameter/argument.
    let x = sentence[i];
    // Conditional to skip empty spaces.
    if (x !== " ") {
      // Conditional to check if current letter is key in results object.
      if (!results[x]) {
        // If not add letter as key in results object with value = an array containing current index.
        results[x] = [i];
      } else {
        // If yes, push current index into existing array.
        results[x].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
console.log(letterPositions("hello"));
  
  
  
  
  
  
  
  


    
