const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }


};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  // Create an empty object to hold results of function
  const results = {};
  // Use for loop to iterate through the all items array.
  for (const item of allItems) {
    // Check if the current item from [allItems] is a key in {itemsToCount} with a value of true.
    if (itemsToCount[item]) {
      // Check if the current item is already a key(entered) in results.
      if (!results[item]) {
        // If the current item is not in the results object, add the item to the results object with a value of 1.
        results[item] = 1;
      } else if (results[item]) {
        // If the current item is already in the results object, increment value by 1.
        results[item] ++;
      }
    }

    
  }
  // Return the results object.
  return results;
  
};

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);