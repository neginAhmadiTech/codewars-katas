// https://www.codewars.com/kata/65128732b5aff40032a3d8f0/javascript
// Neutralisation (8kyu)

function neutralise(s1, s2) {
  s1Array = s1.split("");
  s2Array = s2.split("");

  let res = "";
  for (i = 0; i < s1.length; i++) {
    if (s1Array[i] === s2Array[i]) {
      res += s1Array[i];
    } else {
      res += "0";
    }
  }

  return res;
}
