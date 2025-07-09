let charsForPassword = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%^&*_';
let charsArray = [...charsForPassword]
// -----------random-Int-Function----------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
// ---------------------------------
// ------------all-lets-that-is-needed----------
let length = +prompt('enter password length');
let uniquePassword = new Set();
let password = '';
let unique = document.querySelector('.unique');
let common = document.querySelector('.common');
// ------functions-for-passwords-------------------------------
function uniquePasswordGenerator() {        
    while (uniquePassword.size < length) {
        let randomIndex = getRandomInt(charsArray.length);
        let char = charsArray[randomIndex];
        uniquePassword.add(char); 
    }
    let uniquePasswordArray = Array.from(uniquePassword);
    let uniquePasswordString = uniquePasswordArray.join('')
    unique.innerText = `your unique password: ${uniquePasswordString}`;
    return uniquePasswordString;
}
function passwordGenerator() {
    for (let i = 0; i < length; i++) {
        let char = charsArray[getRandomInt(charsArray.length)];
        password = password + char;
    }
    common.innerText = `your password: ${password}`
    return password;

}
// -----------------------------------------------------------------





