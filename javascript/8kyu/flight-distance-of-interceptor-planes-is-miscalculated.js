// https://www.codewars.com/kata/67b7a527c9f842fd3b02adb8/javascript
// [BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated (8kyu)


// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_MILE = 1.609344;
  const travelHours = travelTime / 60;
  const travelMiles = avgSpeed * travelHours * 2.9802;
  const travelKms   = travelMiles / KM_PER_MILE;
  
  return travelKms;
}