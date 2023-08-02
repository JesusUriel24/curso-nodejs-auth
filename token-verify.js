const jwt= require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5MTAwNTQwMn0.Cf0hpprdFvt0GXk7g2o2AFTfpY0UvA6_jAt51ArrdXk';

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);