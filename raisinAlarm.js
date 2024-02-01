const raisinAlarm = function (cookie) {
let message = ""
  for (let i = 0; i < cookie.length; i++) {
  if (cookie[i] === "🍇") {
    message = "Raisin Alert"
    return message
  } else { 
    message = "All good!"
  }
}
  return message
  
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function (cookies) {
  // create empty results array //
  const 
  
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
