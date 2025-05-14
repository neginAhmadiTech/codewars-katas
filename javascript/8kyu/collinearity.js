// https://www.codewars.com/kata/65ba420888906c1f86e1e680/javascript
// Theoretical Material (8kyu)

function collinearity(x1, y1, x2, y2) {
  if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
    return true;
  }

  const k1 = x1 / y1;
  const k2 = x2 / y2;

  const result = k1 === k2 ? true : false;
  return result;
}
