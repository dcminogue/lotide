const tail = function(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else
  return arr.slice(1);
 
};

module.exports = tail;
