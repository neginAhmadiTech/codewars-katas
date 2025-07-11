// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/javascript
// Check Same Case (8kyu)

function checkCase(character) {
    if (!/[a-zA-Z]/.test(character)) {
        return 'Mixed case'; 
    } else if (character === character.toUpperCase()) {
        return 'Uppercase';
    } else {
        return 'Lowercase';
    }
}

function sameCase(a, b){
    const caseA = checkCase(a);
    const caseB = checkCase(b);

    if (caseA === 'Mixed case' || caseB === 'Mixed case') {
        return -1;
    } else if (caseA === caseB) {
        return 1;
    } else {
        return 0;
    }
}

