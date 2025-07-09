let charsForPassword = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%^&*_';
let charsArray = [...charsForPassword]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

console.log(charsArray);

let password = new Set();
function uniquePasswordGenerator(length) {        
    while (password.size < length + 1) {
        let randomIndex = getRandomInt(charsArray.length);
        let char = charsArray[randomIndex];
        password.add(char); // Set сам не додасть дублікат
    }
        return password;
}

console.log(uniquePasswordGenerator(8));



