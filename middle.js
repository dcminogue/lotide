const middle = function(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else
    if (arr.length <= 2) {
      return [];
    } else
      if (arr.length % 2 !== 0) {
        return [arr[Math.floor(arr.length / 2)]];
      } else {
        return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
      }
};

module.exports = middle;


  

  
  
  
  
  



















