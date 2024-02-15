const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }


};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Roy", "Jamie");
assertEqual("Jamie, I'm me", "Jamie, I'm me");
assertEqual(7, 7);
assertEqual(12, 15);
