const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } 
    if (arr.length % 2 !== 0) {
      return [arr[Math.floor(arr.length / 2)]];
      } else {
      return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
    }
  };

module.exports = middle;


  

  
  
  
  
  



















