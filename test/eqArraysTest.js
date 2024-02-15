const assertEqual = require(`../assertEqual`);
const eqArrays = require(`../eqArrays`);


// TEST CODE


assertEqual(eqArrays([2, 3, 5, 6], [5, 6, 2]), false);
assertEqual(eqArrays([5, 6, 2], [5, 6, 2]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["bob", "bill", "joe"], ["bob", "bill", "joe"]), true);
assertEqual(eqArrays(["bob", "bill", "joejoe"], ["bob", "bill", "joe"]), false);