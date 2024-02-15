const assertEqual = require(`../assertEqual`);
const tail = require(`../tail`);


// TEST CODE
const result = tail(["Hello" , "Lighthouse" , "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(tail(["test"]).length, 0) // tail of array with one element only should be empty
assertEqual(tail([]).length, 0) // tail of an empty array should also be empty
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
