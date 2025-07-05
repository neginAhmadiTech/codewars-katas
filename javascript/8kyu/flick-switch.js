// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/javascript
// Flick Switch (8kyu)

function flickSwitch(arr) {
  let res = [];
  let currentStat = true;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      currentStat = !currentStat;
    }
    res.push(currentStat);
  }
  return res;
}
