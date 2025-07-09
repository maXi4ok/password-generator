let charsForPassword = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%^&*_';
let charsArray = [...charsForPassword]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

console.log(charsArray);

let uniquePassword = new Set();
let password = '';
function uniquePasswordGenerator(length) {        
    while (uniquePassword.size < length + 1) {
        let randomIndex = getRandomInt(charsArray.length);
        let char = charsArray[randomIndex];
        uniquePassword.add(char); 
    }
        return uniquePassword;
}
function passwordGenerator(length) {
    for (let i = 0; i < length + 1; i++) {
        let char = charsArray[getRandomInt(charsArray.length)];
        password = password + char;
    }
    return password;

}

console.log(uniquePasswordGenerator(8));



