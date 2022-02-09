const jwt = require('jsonwebtoken');

const user = {
  id:1,
  username:'daniel.play',
  email:'danielcustodio.dev@gmail.com'
}

const token = jwt.sign(user, 'SEGREDO', { 
  algorithm:'HS256',
  expiresIn:'1h'
});

const payload = jwt.decode(token,'SEGREDO');

console.log(token);
console.log(payload);