document.getElementById("generate-btn").addEventListener("click", function () {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecialChars = document.getElementById("special").checked;

    const password = generatePassword(length, includeUppercase, includeNumbers, includeSpecialChars);
    document.getElementById("password").textContent = password;
});

function generatePassword(length, includeUppercase, includeNumbers, includeSpecialChars) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";

    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?/~";
    
    let characters = lowercase;
    
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += digits;
    if (includeSpecialChars) characters += specialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}