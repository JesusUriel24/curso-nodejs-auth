const bcrypt = require('bcrypt');

async function verifyPassword() { 
const myPassword = 'admin 123 .202';
const hash = '$2b$10$w0sgEjkDIgT5hpzo9bRzbOnCqOgtBsuqUEiBJrKI7SaRCM/sEKtKm';
const isMatch = await bcrypt.compare(myPassword, hash);
console.log(isMatch);
}

verifyPassword();
