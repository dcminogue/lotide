const eqArrays = function(arr1, arr2) {
  // Checks if length of arrays are equal. If not returns false.
  if (arr1.length !== arr2.length) {
    return false;
  } 
    // Checks if items at each index are equal. If not returns false.  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
       return false;
      }
    }
  // If array length and all items at each index are equal it returns true. 
  return true;
};

module.exports = eqArrays;

