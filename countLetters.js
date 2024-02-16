// Testing function that takes results from the function and compares it to the expected output. Can only compare primitive data types.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function that counts the instances of a letter in a string.
const countLetters = function(string) {
// Create an empty results object to hold the letter(key), and number of times that letter is used(value).
  const results = {};
  // Use for of loop to iterate through all characters in string  in countLetters variable.
  for (let char of string) {
    // Conditional states if character in lowerCaseString is not a space continue through conditional statements.
    if (char !== " ") {
      // If the current char is not in the results object, add the char to the results object with a value of 1.
      if (!results[char]) {
        results[char] = 1;
      } else {
        // If the current char is already in the results object, increment value by 1.
        results[char] ++;
      }
    }
  }
  // Return the results object.
  return results;
};

module.exports = countLetters;

const resultsObject = countLetters('Who who who stole my chevy');
assertEqual(resultsObject["w"], 2);
assertEqual(resultsObject["s"], 1);
assertEqual(resultsObject["e"], 2);
assertEqual(resultsObject["f"], undefined);