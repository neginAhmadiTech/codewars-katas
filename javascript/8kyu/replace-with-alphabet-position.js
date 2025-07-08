// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
// Replace With Alphabet Position (8kyu)

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");
}
