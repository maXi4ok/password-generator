let charsForPassword = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%^&*_1234567890';
let charsArray = [...charsForPassword]
// -----------random-Int-Function----------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
// ---------------------------------
// ------------all-lets-that-are-needed----------
let input = document.getElementById('input');
let length;
let unique = document.querySelector('.unique');
let common = document.querySelector('.common');
// ------functions-for-passwords-------------------------------
input.oninput = function () {
    length = this.value
}
function uniquePasswordGenerator() {  
    let uniquePassword = new Set();      
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
    let password = '';
    for (let i = 0; i < length; i++) {
        let char = charsArray[getRandomInt(charsArray.length)];
        password = password + char;
    }
    common.innerText = `your password: ${password}`
    return password;

}

// -----------------------------------------------------------------





