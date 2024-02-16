const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  // For in loop loops through keys in objects.
  for (let key in obj) {
    // Checks if callback funtion returns truthy value.
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": 1,
  "Akaleri":   3,
  "noma":      2,
  "elBulli":   3,
  "Ora":       2,
  "Akelarre":  3
}, x => x === 3), "Akaleri");

assertEqual(findKey({
  "Blue Hill": 1,
  "Akaleri":   3,
  "noma":      2,
  "elBulli":   3,
  "Ora":       2,
  "Akelarre":  3
}, x => x === 4), undefined);

