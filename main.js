let charsForPassword = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%^&*_';
let charsArray = [...charsForPassword]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

console.log(charsArray);
console.log(getRandomInt(12));

let password = '';
function passwordGenerator(length) {
    for (let i = 0; i < length + 1; i++) {
        for (let i = 0; i < 8; i++) {
            let randomIndex = getRandomInt(charsArray.length);
            let char = charsArray[randomIndex];
            password += char;
        }
        return password;
}
}

console.log(passwordGenerator(8));
